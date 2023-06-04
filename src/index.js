import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  {id: 'todo-0', name: 'Eat', completed: true},
  {id: 'todo-1', name: 'Sleep', completed: false},
  {id: 'todo-2', name: 'Repeat', completed: false}
];
const BUTTONS = [
  {id: 'btn-0', name: 'all'},
  {id: 'btn-1', name: 'Active'},
  {id: 'btn-2', name: 'Completed'}
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} buttons={BUTTONS} />
  </React.StrictMode>
);
