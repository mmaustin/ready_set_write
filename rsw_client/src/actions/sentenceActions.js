export function fetchSentences() {
    return (dispatch) => {
      fetch("http://localhost:3000/sentences")
        .then((response) => response.json())
        .then((sentences) => dispatch({ type: "FETCH_SENTENCES", sentences }));
    };
  }