class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  // Add a new phone number
  addPhoneNumber(number) {
    this.phoneNumbers.add(number);
  }

  // Remove a phone number
  removePhoneNumber(number) {
    this.phoneNumbers.delete(number);
  }

  // Dial a phone number
  dialPhoneNumber(number) {
    if (this.phoneNumbers.has(number)) {
      this.notifyObservers(number);
    } else {
      console.log(`Phone number ${number} is not in the list.`);
    }
  }

  // Add an observer
  subscribe(observer) {
    this.observers.push(observer);
  }

  // Remove an observer
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Notify all observers
  notifyObservers(number) {
    this.observers.forEach((obs) => obs.notify(number));
  }
}


export {Telephone};
