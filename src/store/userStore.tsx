import { makeAutoObservable } from 'mobx';

class UserStore {
  email:string = '';
  password:string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setEmail(value:string) {
    this.email = value;
  }

  setPassword(value:string) {
    this.password = value;
  }
}

const userStore = new UserStore();
export default userStore;