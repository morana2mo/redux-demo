import { SHOW_CATEGORY,LOADING,LOAD_FAILURE} from '../constants/home';

const home = (state = {}, action) => {
  switch (action.type) {
    case SHOW_CATEGORY:
      return {
        ...state,
        category: action.res
      };
    case LOADING:
      return {
        loading: true
      };
    case LOAD_FAILURE:
      return {
        loading: false
      };
    default:
      return state;
    }
};

export default home;