export default function rootReducer(
    state = { words: "and now for some words from our sponsor"},
    action
  ) {
    switch (action.type) {
      case "SHOW_WORDS":
        return {
          state
        };
  
      default:
        return state;
    }
  }