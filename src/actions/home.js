import { SHOW_CATEGORY ,LOADING ,LOAD_FAILURE} from '../constants/home';

const showCategory = () => {
  return {
    types: [LOADING, SHOW_CATEGORY, LOAD_FAILURE],
    request: {
      url: '/home'
    },

  };
}
export { showCategory };
