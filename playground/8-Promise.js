const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([4, 7, 1])
        reject('Went Wrong')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch(error => {
    console.log(error)
})


