import { makeAutoObservable } from "mobx";

class SignStore {
    nickName: string = '';
    password: string = '';
    email: string = '';
    phone: string = '';

  constructor() {
    makeAutoObservable(this);
    }

    
   setNickName(value: string) {
    this.nickName = value;
  }

  setPassword(value: string) {
    this.password = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

  setPhone(value : string) {
    this.phone = value;
  }
}

const signStore = new SignStore();
export default signStore;