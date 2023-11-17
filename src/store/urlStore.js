import { makeAutoObservable } from 'mobx';

class UrlStore {
  shortenUrl = '';

  constructor() {
    makeAutoObservable(this);
  }

  setShortenUrl(newShortenUrl) {
    console.log('setShortenUrl is called with:', newShortenUrl);
    this.shortenUrl = newShortenUrl;
  }
}

const urlStore = new UrlStore();
export default urlStore;