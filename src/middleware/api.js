import 'whatwg-fetch';

const apiGateway = "http://haoqi.com";

const api = ({ getState, dispatch }) => next => action => {

  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  const { types, request, ...rest } = action;

  if (!request) {
    return next(action);
  }

  const [REQUEST, SUCCESS, FAILURE] = types;
  const { method, url, data, processer } = request;


  if (processer && typeof processer !== 'function') {
    throw new Error('async action\'s request processer must be a type of function');
  }

  next({ type: REQUEST, ...rest });

  const fetchOptions = {
    method: method ? method : 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  let fetchUrl = apiGateway + url;

  if (method == 'POST') {
    fetchOptions.body = JSON.stringify(data);
  } else if ((!method || method == 'GET') && data) {
    fetchUrl += '?' + Object.keys(data).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])).join('&');
  }

  return fetch(fetchUrl, fetchOptions)
    .then(response => {
      if (response.status == 200) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }).then(response => response.json())
    .then(json => {
      if (json.error) {
        next({ type: FAILURE, error: json.error, ...rest });
      } else if (!json) {
        next({ type: FAILURE, error: 'response is error', ...rest });
      } else {
        let res;
        if (processer) {
          res = processer(json);
        } else {
          res = json;
        }
        next({ type: SUCCESS, res, ...rest });
      }
    }).catch(error => {
        console.log('api middleware error:', error);
        next({ type: FAILURE, error, ...rest });
    });
}

export default api;
