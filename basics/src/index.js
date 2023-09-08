import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const customElement2 = {
//   type: 'input',
//   children: 'enter password',
//   props:{
//       type: "password",
//       name: "pass",
//       id: 'userPass',
//       placeholder: 'enter password'
//   }
// }

// const element3 = (
//     <a href='https://linkedin.com' target='_blank'>Visit Linkedin</a>
// )

// const ReactElement = React.createElement(
//   'a',
//   {href: "https://linkedin.com", target: "_blank"},
//   "Linkedin"
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

