class PhoneNumberObserver {
    notify(number) {
        console.log(`\nPhone number dialed: ${number}`);
    }
}

class NowDaillingObserver {
    notify(number) {
        console.log(`\nNow Dialling ${number}`);
    }
}

module.exports = {PhoneNumberObserver, NowDaillingObserver};
