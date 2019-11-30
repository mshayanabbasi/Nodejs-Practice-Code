const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1, 2).then((sum) => {
    console.log(sum)
    add(sum, 5).then((sum2) => {
        console.log(sum2)
    }).catch((e) => {
        console.log(e)
    })
}).catch((e) => {
    console.log(e)
})

add(1, 1).then((sum1) => {
    console.log(sum1)
    return add(sum1, 4)
}).then((sum3) => {
    console.log(sum3)
}).catch(e => {
    console.log(e)
})



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

//                            fulfiled
//                          /
// Promise   -- pending --> 
//                          \
//                            rejected


