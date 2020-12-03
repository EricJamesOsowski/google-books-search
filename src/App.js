import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';




function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/saved" component={SavedPage} />
      </div>
    </Router>
  );
}

export default App;
