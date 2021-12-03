export default function sentencesReducer(
    state = { sentences: []},
    action
  ) {
    switch (action.type) {
      case "FETCH_SENTENCES":
        return {
          sentences: action.payload
        };
      /*case "FETCH_SENTENCE":
        return{
          sentences: action.payload
        };*/
      case "ADD_SENTENCE":
        return{
          ...state,
          sentences: [...state.sentences, action.sentence]
        }
      case "DELETE_SENTENCE":
          return { sentences: state.sentences.filter((sentence) => sentence.id !== action.payload)}  
      default:
        return state;
    }
  }