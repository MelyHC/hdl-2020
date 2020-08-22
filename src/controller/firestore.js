import firebase from './main';

const userCollection = () => firebase.firestore().collection('user');

const addUser = (user) => {
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
    photo: null
  })
}

export default {
  addUser
}