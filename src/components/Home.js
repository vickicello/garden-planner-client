import React from 'react';
import harvest from '../harvest.jpg';

const Home = () => {
  return (
    <div className="Home">
      <div className="HomeText">
        <h1>Welcome to Garden Planner!</h1>
        <img src={harvest} width="40%" height="65%" alt="harvest" />

        <p>Navigate this site and build the garden of your dreams.</p>
        <p>Keep track of sow by dates, harvest times, and all of your favorite varieties.</p>
      </div>
    </div>
  )
}

export default Home;