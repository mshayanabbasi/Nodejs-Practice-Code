// Object Property Shorthand

const name = 'Shayan'
const userAge = 21

const user = {
    name,
    age: userAge,
    location: 'Pakistan'
}
console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const product = product.stock

// const {label: productLabel, stock, rating = 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transcations = ( type, { label, stock } ) => {
    console.log(type, label, stock)
} 
transcations('order', product)
