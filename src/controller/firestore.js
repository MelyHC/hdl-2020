import firebase from './main';

// realiza la collección Firebase
const userCollection = () => firebase.firestore().collection('user');

export const addUser = (user) => {
  const { email, name, age, country, liveCountry, typeUser, cmp, rne } = user;
  userCollection().add({
    email,
    name,
    age,
    country,
    liveCountry,
    typeUser,
    cmp,
    rne,
    date: Date.now(),
    photo: null,
  });
};

export const getUser = (email) => {
  // firebase.firestore().collection('user').doc(email);
  const db = firebase.firestore();
  const usuarioDB = db.collection('user');
  usuarioDB.where('email', '==',email).onSnapshot((onSnapshot) => {
    onSnapshot.forEach((objectprofile) => {
      const user = objectprofile.data();
      console.log(user);
    });
  });
};
export default {
  addUser
}