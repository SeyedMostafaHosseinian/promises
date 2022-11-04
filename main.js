
//use callback
function getProduct() {
    let data = [];
    const BASE_URL = "https://digistore.glitch.me";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${BASE_URL}/products`);
    xhr.send();
    xhr.onload = () => {
        data = JSON.parse(xhr.response);
        displayData(data);
    };
}
function displayData(data) {
    console.log('callback', data[0]);
}
getProduct();
///// convert callbacks to promises
function getProduct2() {
    return new Promise((resolve, reject) => {
        let data = [];
        const BASE_URL = "https://digistore.glitch.me";
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${BASE_URL}/products`);
        xhr.send();
        xhr.onload = () => {
            data = JSON.parse(xhr.response);
            if (data.length > 0) {
                resolve(data);
            }
            else {
                reject('error');
            }
        };
    });
}
function displayData2(data) {
    console.log('promise', data[0]);
}
getProduct2()
    .then(data => displayData2(data));

/////convert promises to async/await
function getProducts3() {
    return new Promise((resolve, reject) => {
        let data = [];
        const BASE_URL = "https://digistore.glitch.me";
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${BASE_URL}/products`);
        xhr.send();
        xhr.onload = () => {
            data = JSON.parse(xhr.response);
            if (data.length > 0) {
                resolve(data);
            }
            else {
                reject('error');
            }
        };
    });
}
function displayData3(data) {
    console.log('async/await', data[0]);
}
async function logProducts3() {
        const data = await getProducts3();
        displayData3(data);
}
logProducts3();
