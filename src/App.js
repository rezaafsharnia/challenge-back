import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [words, setWords] = useState([]);
  useEffect(() => {
    const getWords = async () => {
      await axios
        .get("http://localhost:1337/api/words")
        .then((res) => setWords(res.data.data))
        .catch((err) => console.log(err));
    };
    getWords();
  });
  return (
    <div className="">
      {words.map((w) => {
        return (
          <div key={w.id}>
            <h2>{w.attributes.word}</h2>
            <h4>{w.attributes.author}</h4>
            <p>{w.attributes.sentence}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
