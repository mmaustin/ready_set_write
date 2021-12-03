import React from "react";
import Sentence from './Sentence'

/*
const Sentences = ({ sentenceList }) => (
  <div>
    {sentenceList.map((sentence) => (
      <Sentence key={sentence.id} sentence={sentence} />
    ))}
  </div>
);

export default Sentences;
*/


const Sentences = ({ sentenceList }) => (
  <div>
    <Sentence key={sentenceList[0]} sentence={sentenceList[0]} />
  </div>
);

export default Sentences;
