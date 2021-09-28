import React from "react";
import Sentence from './Sentence'

const Sentences = ({ sentenceList }) => (
  <div>
    {sentenceList.map((sentence) => (
      <Sentence key={sentence.id} sentence={sentence} />
    ))}
  </div>
);

export default Sentences;