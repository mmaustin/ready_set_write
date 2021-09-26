export default function sentencesReducer(
    state = { sentences: []},
    action
  ) {
    switch (action.type) {
      case "FETCH_SENTENCES":
        return {
          sentences: action.sentences
        };
  
      default:
        return state;
    }
  }