import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('dateTime', () => {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:"numeric", minute:"numeric", second:"numeric" };
 let  date = new Date("2019-09-12T17:58:55.671000Z");
 console.log(date.toLocaleString("en-US",options));
});
