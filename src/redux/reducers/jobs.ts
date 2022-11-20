import { SETDATA } from "../typesRedux";

const initialState = {}

export const jobsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SETDATA:
      return {...action.data}

    default:
      return state;
  }
};
