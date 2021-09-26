export default function sentencesReducer(
    state = { sentences: []},
    action
  ) {
    switch (action.type) {
      case "FETCH_SENTENCES":
        return {
          sentences: action.sentences
        };
      case "ADD_SENTENCE":
        return{
          ...state,
          sentences: action.sentence,
        }
      default:
        return state;
    }
  }