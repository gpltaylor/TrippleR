const initialState = {
  company: "Trench Software",
  author: "Garry Taylor"
}

const settingsReducer = (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_SETTINGS":
      return Object.assign({}, state, {[action.key]: action.value });
    default:
      return state;
  }
}

export default settingsReducer;