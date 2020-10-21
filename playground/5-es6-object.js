// Object property shorthand
// able to use shorthand only because property name is same as variable name

const name = 'Andrew'
const userAge = 27

const user = {
    name, // name: name,
    age: userAge,
    location: 'Philadelphia'
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
// const stock = product.stock

// const { label: productLabel, stock, rating = 5 } = product // label:productLabel to rename, rating = 5 default value
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)