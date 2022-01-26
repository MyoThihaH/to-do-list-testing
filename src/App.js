import React from 'react';

import { TodoList } from './features/todo/TodoList';
import { Header } from './features/header/Header';
import { Footer } from './features/footer/Footer';
import './App.css';

const App = () => {
  return (
    <div>
    <Header/>
    <TodoList/>
    <Footer/>
    </div>
  )
}
export default App;
