import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Quote from "./models/QuotesModel";
import { findQuote } from "./components/Quotes";

// import getJoke from "./services/getJoke";
// import Joke from "./models/joke";

// function App() {
//   const [joke, setJoke] = useState<Joke>();
//   const [test, setTest] = useState(0);

//   useEffect(() => {
//     getJoke().then((data) => setJoke(data));
//     console.log(process.env.REACT_APP_NEWS_API_KEY);
//     console.log(
//       "this new thing" + process.env.REACT_APP_NEWS_API_KEY_JENNY_RACHEL_ANU
//     );
//   }, [test]);

//   return (
//     <div className="App">
//       <p>{joke?.setup}</p>
//       <p>{joke?.punchline}</p>
//       <button
//         onClick={() => {
//           setTest((prv) => prv + 1);
//         }}
//       ></button>
//     </div>
//   );
// }

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    findQuote().then((data) => setQuotes(data));
  }, []);

  return (
    <div className="App">
      <ul>
        {quotes.map((quote, index) => {
          return (
            <li key={index}>
              <p>{quote.author}</p>
              <p>{quote.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
