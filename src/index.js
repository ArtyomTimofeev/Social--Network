import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'Hello man, I wanna smoke', likesCount: 46 },
  { id: 2, message: 'Okey, man! I have some G', likesCount: 42 },
  { id: 3, message: 'Oh gays! I wanna too', likesCount: 41 },
];

let dialogsData = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Shon' },
  { id: 3, name: 'Evan' },
  { id: 4, name: 'Nick' },
  { id: 5, name: 'Alex' },
  { id: 6, name: 'Mike' },
];

let messagesData = [
  { id: 1, message: 'Yo' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'Salam' },
  { id: 4, message: 'Yo yo' },
  { id: 5, message: 'Wtf?!' },
  { id: 6, message: 'Hi' },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      messagesData={messagesData}
      dialogsData={dialogsData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
