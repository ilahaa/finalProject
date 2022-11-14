import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import "../src/Sass/style.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppRouters from './Pages/AppRouters';

const App = () => {
  return (
    <div> 
    <AppRouters />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
