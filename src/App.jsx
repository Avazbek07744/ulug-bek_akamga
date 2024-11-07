import React, { useState, useEffect } from 'react';
import MainLeout from './leout/MainLeout';
import Home from './page/Home';
import { HashLoader } from 'react-spinners';

const App = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);

    const timer = setTimeout(() => {
      setLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {load ? (
        <span className='text-center flex justify-center'>
        {load && <HashLoader color='#fcd34d' size={300} />}
    </span>
      ) : (
        <MainLeout>
          <Home />
        </MainLeout>
      )}
    </div>
  );
};

export default App;
