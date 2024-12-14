const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise resolved!');
    } else {
        reject('Promise rejected.');
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));