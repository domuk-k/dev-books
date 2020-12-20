const storageService = {
  get(key: string) {
    return globalThis.sessionStorage.getItem(key);
  },
  set(key: string, value: string) {
    globalThis.sessionStorage.setItem(key, value);
  },
};

export default storageService;
