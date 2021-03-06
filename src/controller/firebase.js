import firebase from './main';
import firestore, { getUser } from './firestore';

export const getCurrentUser = () => firebase.auth().currentUser;

const emailVarification = async () => {
  const user = firebase.auth().currentUser;

  return user.sendEmailVerification()
    .then(() => {
      return {
        code: 'ok',
        message: 'Send email verification',
      };
    });
};

const createUser = async (user) => {
  const { email, pass } = user;

  return firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(result => {

      emailVarification()
        .then(res => res)

      firestore.addUser(user);

      return result;
    });
};
const userValidate = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user && user.emailVerified) {

    }
  });
};

export const signIn = async (email, pass) =>
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(res => {
      // console.log(res);
      // userValidate()
      getUser(email);
      return res
    });

const logOut = () => firebase.auth().signOut()



export default { createUser, signIn, logOut }