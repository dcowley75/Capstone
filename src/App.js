import React from 'react';
import './App.css';

import Weather from "./Weather";
import News from "./News";
import ToDo from "./ToDo";

function App() {
  return (
  <main>
    <h1>Greetings, DJC! Hopefully the weather is good for a MOVIE</h1>
    <Weather/>
    <section>
      <div>
        <h3>Movies Checklist</h3>
        <ToDo/>
      </div>
      <div>
        <h3>Recent Movie Reviews</h3>
      <News/>
      </div>
    </section>
  </main>
  );
}

export default App;