export default function sentencesReducer(
    state = { words: "and now for some words from our sponsor"},
    action
  ) {
    switch (action.type) {
      case "SHOW_WORDS":
        return {
          words: state.words + "!"
        };
  
      default:
        return state;
    }
  }