// console.log('1')
// setTimeout(() => {
//     console.log('2')
// },3000)
// console.log('3')

//use callback
function getProduct(callback) {
    let data = []
    const BASE_URL = "https://digistore.glitch.me";
    const xhr = new XMLHttpRequest()
    xhr.open('GET',`${BASE_URL}/products`)
    xhr.send()
    xhr.onload = () => {
        data =JSON.parse(xhr.response)
        callback(data)
        console.log(xhr)


    }
}
function displayData(data) {
    data.map(item => {
        console.log(item)
    })
}

///// convert callbacks
function displayData2(data) {
    data.map(item => {
        console.log(item)
    })
}

function getProduct2() {
    return new Promise((resolve,reject) => {
        let data = []
        const BASE_URL = "https://digistore.glitch.me";
        const xhr = new XMLHttpRequest()
        xhr.open('GET',`${BASE_URL}/products3`)
        xhr.send()
        xhr.onload = () => {
            data =JSON.parse(xhr.response)
            if (data.length) {
                resolve(data)
            }
            else {
                reject('error')
            }
        }
    } )


}
getProduct2().then(data => displayData2(data))
    .catch(error => console.log('error'))



