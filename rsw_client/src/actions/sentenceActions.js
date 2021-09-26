export function fetchSentences() {
    return (dispatch) => {
      fetch("http://localhost:3000/sentences")
        .then((response) => response.json())
        .then((sentences) => dispatch({ type: "FETCH_SENTENCES", sentences }));
    };
  }

  export function addSentence(sentence) {
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