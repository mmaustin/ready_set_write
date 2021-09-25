export default function rootReducer(
    state = { words: "and now for some words from our sponsor"},
    action
  ) {
    switch (action.type) {
      case "ADD_WORDS":
        return {
          ...state,
          words: [...state.words, action.words]
        };
  
      default:
        return state;
    }
  }