import React from 'react';
import SearchForm from '../SearchForm';
import Title from '../Title';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import 'react-bootstrap/Card';




 const HomeHero = () => {
    return (
      <Card.Body className="card">
        <Card className="">
        <Card.Header><Title /></Card.Header>
        <div className="nav-item">
        <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-item "}>|  Search Page  |</Link>
        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-item "} >| Saved Books |</Link>
        </div>
        <br></br>
          <SearchForm />
          <br />
        </Card>
      </Card.Body>
    );
  };

  export default HomeHero;