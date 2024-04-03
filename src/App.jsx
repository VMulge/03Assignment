import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [show, setShow] = React.useState(true);

  return (
    <>
    <div>
    <button onClick={() => setShow(!show)}>
        {show ? "Hide Element Below" : "Show Element Below"}
    </button>
    </div>

      {show && <div>Click on Hide button</div>}
    </>
  );
}
export default App
