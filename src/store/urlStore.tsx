import { makeAutoObservable } from 'mobx';

class UrlStore {
  shortenUrl : String = '';

  constructor() {
    makeAutoObservable(this);
  }

  setShortenUrl(newShortenUrl :String) {
    this.shortenUrl = newShortenUrl
  }
}

const urlStore = new UrlStore();
export default urlStore;