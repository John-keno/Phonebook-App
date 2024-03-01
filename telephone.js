class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  //shoow contact list
  showPhoneNumberList() {
    if (this.phoneNumbers.size == 0) {
      console.log("\nThere are no Phone numbers in your contact list.");
      return false;
    } else {
      console.log("\n Contact list:");
      this.phoneNumbers.forEach((number) => {
        console.log(`- ${number}`);
      });
      return true;
    }
  }

  // Add a new phone number
  addPhoneNumber(number) {
    if (!this.phoneNumbers.has(number) && number !== "") {
      this.phoneNumbers.add(number);
      console.log(`\n${number} has been added to your contact list.`);
    } else {
      if (number == "") {
        console.log("\n input is empty");
      } else {
        console.log(`\n${number} already exist your contact list.`);
      }
    }
  }

  // Remove a phone number
  removePhoneNumber(number) {
    if (this.phoneNumbers.has(number) && number !== "") {
      this.phoneNumbers.delete(number);
      console.log(`\n${number} has been deleted from your contact list.`);
    } else {
      if (number == "") {
        console.log("\n input is empty");
      } else {
        console.log(`\n${number} does not exist in your contact list.`);
      }
    }
  }

  // Dial a phone number
  dialPhoneNumber(number) {
    if (this.phoneNumbers.has(number)) {
      this.notifyObservers(number);
    } else {
      console.log(`Phone number ${number} is not in the contact list.`);
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

module.exports = { Telephone };
