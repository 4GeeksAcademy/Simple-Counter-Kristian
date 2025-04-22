import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/SecondsCounter';
let counter = 0;
setInterval(() => {
  let firstDig = Math.floor((counter / 1) % 10);
  let secondDig = Math.floor((counter / 10) % 10);
  let thirdDig = Math.floor((counter / 100) % 10);
  let fourthDig = Math.floor((counter / 1000) % 10);
  let fifthDig = Math.floor((counter / 10000) % 10);
  let sixthDig = Math.floor((counter / 100000) % 10);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SecondsCounter
      firstDig={firstDig}
      secondDig={secondDig}
      thirdDig={thirdDig}
      fourthDig={fourthDig}
      fifthDig={fifthDig}
      sixthDig={sixthDig}
      />
    </React.StrictMode>,
  );
counter++
  
}, 1000);
