const initialState = {
  data: [],
  loading: false,
  error: null,
};

const main_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case "FETCH_REQUEST_ERROR":
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    default:
      return state;
  }
};

export default main_reducer;
