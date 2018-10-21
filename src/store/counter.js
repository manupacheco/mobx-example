import { decorate, observable, action} from 'mobx';

class Counter {
  constructor() {
    this.value = 0;
  }

  increment = () => {
    this.value++;
  }

  decrement = () => {
    this.value--;
  }
}

decorate(Counter, {
  value: observable,
  increment: action,
  decrement: action,
})

const counter = new Counter();

export default counter;