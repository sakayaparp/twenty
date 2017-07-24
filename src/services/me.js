import User from './user';
import Auth from './auth';

const getId = () => Auth.getCurrentUser().uid;

const get = () => User.get(getId());

const set = data => User.set(getId(), data);

export default {
  get,
  set,
};
