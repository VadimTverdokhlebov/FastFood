class Observable {
  constructor(reducer) {
    this.reducer = reducer;
    this.state = this.reducer(undefined, {});
    this.subscribers = [];
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.subscribers.forEach((subscriber) => subscriber());
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    return () => {
      const index = this.subscribers.indexOf(subscriber);
      if (index !== -1) {
        this.subscribers.splice(index, 1);
      }
    };
  }
}

export default function createStore(reducer) {
  const observable = new Observable(reducer);
  return observable;
}
