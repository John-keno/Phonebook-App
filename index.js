// import required modules
const readline = require("readline");
const { Telephone } = require("./telephone.js");
const { PhoneNumberObserver, NowDaillingObserver } = require("./observers.js");

// Creates an interface to read and write from the console
const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a telephone instance
const telephone = new Telephone();

console.log(
  "----------------------Starting testing Sequence--------------------"
);

// Add phone numbers
telephone.addPhoneNumber("2347023232");
telephone.addPhoneNumber("1234567890");

// Add observers
const phoneNumber = new PhoneNumberObserver();
const nowDailling = new NowDaillingObserver();
telephone.subscribe(phoneNumber);
telephone.subscribe(nowDailling);

// Dial a phone number
telephone.dialPhoneNumber("2347023232");

console.log("\nRemoving test phone numbers...");
telephone.removePhoneNumber("2347023232");
telephone.removePhoneNumber("1234567890");

console.log(
  "----------------------Ending testing Sequence--------------------"
);

displayOptions();

function displayOptions() {
  // Display the menu options
  console.log(
    "-----------------------------------------------------------------"
  );
  console.log("\nWhat would you like to do?'\n");
  console.log("1. Add a Phone number to the contact list");
  console.log("2. Remove a Phone number from the contact list");
  console.log("3. View contact list");
  console.log("4. Dial a Phone Number");
  console.log("5. Close and exit phonebook\n");
  prompt.question("Enter an Option number: ", (choice) => {
    choice = Number(choice);
    switch (choice) {
      case 1:
        // Add phone number to contact list
        prompt.question(
          "Please enter the phone number you want to add: ",
          (number) => {
            telephone.addPhoneNumber(number);
            displayOptions();
          }
        );
        break;
      case 2:
        // check contact list if it empty
        if (telephone.showPhoneNumberList()) {
          // remove phone number from contact list
          prompt.question(
            "Please enter the phone number you want to delete: ",
            (number) => {
              telephone.removePhoneNumber(number);
              displayOptions();
            }
          );
        } else {
          displayOptions();
        }
        break;
      case 3:
        // view contact list
        telephone.showPhoneNumberList();
        displayOptions();
        break;
      case 4:
        // Check contact list if empty
        if (telephone.showPhoneNumberList()) {
          // Dial phone number from contact list
          prompt.question(
            "\nPlease enter the phone number you want to dial: ",
            (number) => {
              telephone.dialPhoneNumber(number);
              console.log(
                "\nCall is in progress...\nPress enter key to end call"
              );
              prompt.on("line", () => {
                console.log("\nCall Ended");
                displayOptions();
              });
            }
          );
        } else {
          displayOptions();
        }
        break;
      case 5:
        console.log("exiting Application....");
        console.log("done");
        prompt.close();
        break;
      default:
        console.log("Wrong option number. Try again");
        displayOptions();
        break;
    }
  });
}
