import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="mt-5 pt-3 row m-0 justify-content-center">
        <CreatePost />
        <PostCard />
        <section>
          {/* todos los post */}
        </section>
      </section>
    </>
  )
}

export default Home;