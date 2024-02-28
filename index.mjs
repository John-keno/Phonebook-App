import {Telephone} from './telephone.mjs';
import {PhoneNumberObserver, NowDaillingObserver} from './observers.mjs';

// Create a telephone instance
const telephone = new Telephone();



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
