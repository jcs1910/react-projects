import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <>
      <section className="container">
        <h3>{people.length} Today's Birthday</h3>
        <List people={people} />
        <button onClick={clearAllItems}>Clear All</button>
      </section>
    </>
  );
}

export default App;
