import firebase from 'firebase';
// import axios from 'axios';

// const get = id => axios.get(`https://twenty-hw3.firebaseio.com/user/${id}.json`)
  // .then(res => res.data);
const get = id => firebase.database()
  .ref(`user/${id}`)
  .once('value')
  .then(snapshot => snapshot.val());

const set = (id, data) => firebase.database()
  .ref(`user/${id}`)
  .set(data);

const list = (callback) => {
  firebase.database().ref('user')
    .on('value', (snapshots) => {
      const result = [];
      snapshots.forEach((snapshot) => {
        const user = snapshot.val();
        user.$id = snapshot.key;
        result.push(user);
      });
      callback(result);
    });
};

const subscribe = (id, callback) => {
  firebase.database()
    .ref(`user/${id}`)
    .on('value', (snapshot) => {
      callback(snapshot.val());
    });
};

export default {
  get,
  set,
  subscribe,
  list,
};
