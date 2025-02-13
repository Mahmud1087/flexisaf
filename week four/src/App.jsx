import { useState, useEffect, useRef } from 'react';
import useLocalStorage from './components/use-localStorage';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const inputRef = useRef(null);

  const {
    value: storedCount,
    setValue: setStoredCount,
    clearValue,
  } = useLocalStorage('counter', 0);

  useEffect(() => {
    console.log('Component Mounted!');

    return () => {
      console.log('Component Unmounted!');
    };
  }, []);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>React Hooks Example</h2>

      <div>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <hr />

      <div>
        <h3>useRef Example</h3>
        <input
          ref={inputRef}
          type='text'
          placeholder='Focus me with the button'
        />
        <button onClick={focusInput}>Focus Input</button>
      </div>

      <hr />

      <div>
        <h3>Local Storage Counter: {storedCount}</h3>
        <button onClick={() => setStoredCount(storedCount + 1)}>
          Increment Stored Counter
        </button>
        <button onClick={clearValue}>Clear Stored Value</button>
      </div>
    </div>
  );
};

export default MyComponent;
