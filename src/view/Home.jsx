import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import UserInfo from '../components/UserInfo';
import InfoCard from '../components/InfoCard';
import { getCurrentUser } from '../controller/firebase';
import {getUser} from '../controller/firestore';

const Home = () => {
  const currentUser = getCurrentUser();
  // console.log(getCurrentUser().name);
  getUser(currentUser.email).then((data)=>{
    data.forEach((doc)=>{
      // console.log(doc);
    });
    // console.log(data);
  });
  // console.log(currentUserData);
  // console.log(currentUser);
  return (
    <div className=" bg-gray">
      <NavBar />
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col-md-3 p-0 p-md-3">
            <UserInfo currentUser={currentUser} />
          </div>
          <div className="col-md-6 p-0  p-md-3">
            <CreatePost />
            <PostCard />
          </div>
          <div className="col-md-3 p-0 p-md-3">
            <a href="tel:024238840" className="btn btn-pink text-white" type="button">Pedir Ayuda</a>
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
