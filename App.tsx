import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [ interval, updateInterval ] = useState(0);
  const [ innerBarWidth, setInnerBarWidth ] = useState(0);

  const growBar = () => {
    const newInterval = setInterval(() => {
      setInnerBarWidth(prevWidth => prevWidth + .182738);
    }, 1000);

    updateInterval(newInterval);
  };

  const stopBar = () => {
    clearInterval(interval);
  };

  const resetBar = () => {
    stopBar();

    setInnerBarWidth(0);
  };

  useEffect(() => {
    if (interval && innerBarWidth === 100) {
      stopBar();
    }
  }, [ innerBarWidth ]);

  return (
    <div className="App">
      <h1>Growing Bar</h1>

      <button
        className='growBarButton'
        onClick={growBar}
      >
        Grow bar
      </button>

      <button
        className='stopBarButton'
        onClick={stopBar}
      >
        Stop bar
      </button>

      <button
        className='resetBarButton'
        onClick={resetBar}
      >
        Reset bar
      </button>

      <div
        className='bar'
      >
        <div
          className={`
            innerBar
            ${innerBarWidth === 100 ? 'innerBarFull' : ''}
          `}
          style={{
            width: innerBarWidth + '%'
          }}
        >

        </div>
      </div>
    </div>
  );
};

export default App;
