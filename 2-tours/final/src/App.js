import React, { useEffect, useState } from 'react';
import Loading from './Components/Layout/Loading';
import Tours from './Components/tours/Tours';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const tourUrl = 'https://course-api.com/react-tours-project';

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(tourUrl);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error Occured');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
    return () => {
      console.log('cleanUp');
    };
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
