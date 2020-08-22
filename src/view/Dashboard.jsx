import React from 'react';
import NavBar from '../components/NavBar';
import Board from '../components/Board';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <section class="flip-scroll table-space table-bordered">
        <Board />
      </section>
    </>
  )
}

export default Dashboard;