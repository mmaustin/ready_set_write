export const fetchSentences = () => {
    return (dispatch) => {
      fetch("http://localhost:3000/sentences")
        .then((response) => response.json())
        .then((sentences) => dispatch({ type: "FETCH_SENTENCES", payload: sentences }));
    };
  }

/*
  export const fetchSentence = (id) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/sentences/${id}`)
      .then((response) => response.json())
      .then((sentence) => dispatch({type: 'FETCH_SENTENCE', payload: sentence}))
    };
  }
*/

  export const addSentence = (sentence) => {
    return (dispatch) => {
      fetch("http://localhost:3000/sentences", {
        method: 'POST',
        body: JSON.stringify(sentence),
        headers: {'Content-Type': 'application/json'}
      })
        .then((response) => response.json())
        .then((sentence) => dispatch({ type: "ADD_SENTENCE", sentence }));
    };
  }

  export const deleteSentence = (id) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/sentences/${id}`, { method: 'DELETE' })
      dispatch({ type: "DELETE_SENTENCE", payload: id })
    };
  }

  export const findSentence = id => {
    return {
      type: 'FIND_SENTENCE',
      payload: id
    }
  }
