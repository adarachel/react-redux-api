import React from "react";
import Users from "./users/Users";
import './header.css';

const App = () => {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', textAlign: 'center', margin: '1rem 0' }}>
        Random User Generator
      </h1>
      <Users />
    </div>
  );
};

export default App;
