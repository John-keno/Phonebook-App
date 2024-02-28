class PhoneNumberObserver {
    notify(number) {
        console.log(`Phone number dialed: ${number}`);
    }
}

class NowDaillingObserver {
    notify(number) {
        console.log(`Now Dialling ${number}`);
    }
}

export {PhoneNumberObserver, NowDaillingObserver};
