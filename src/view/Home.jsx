import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import UserInfo from '../components/UserInfo';
import InfoCard from '../components/InfoCard';

const Home = () => {
  return (
    <div className="container-fluid bg-gray">
      <NavBar />
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col">
            <UserInfo />
          </div>
          <div className="col">
            <CreatePost />
            <PostCard />
          </div>
          <div className="col">
          <button className="btn btn-ts" type="button">Pedir Ayuda</button>
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
            <section>
              {/* todos los post */}
            </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
