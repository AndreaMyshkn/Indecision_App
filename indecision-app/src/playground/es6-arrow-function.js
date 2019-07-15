// const square = function (x){
// return x * x

// }
// console.log(square(9))

// const sum = function (x){
// return x+x
// }
// console.log(sum(4))

// // const squareArrow = (x)=>{
// // return x*x

// // }

// const squareArrow = (x) => x * x

// console.log(squareArrow(4))

// Create regular arrow function
// // Create arrowFunction
// const name = 'Andrea Velázquez'
// const firstName = name.split(' ')[0]

// console.log(firstName)
// const findName = (nombre) => {
//   return nombre
// }

// const findName = (nombre) => nombre.split(' ')[0]

// console.log(findName(name))

const user = {
  name: 'Andrea',
  cities: [ 'Dublin', 'Munich', 'México' ],
  printPlacesLived () {
    return this.cities.map((el) => this.name + ' estuvo en ' + el)
  }
//   {
// this.cities.forEach((city)=>{
// console.log(this.name + ' has lived in ' + city)
// })
}

const multiplier = {
  numbers: [2, 3, 4, 5, 6, 7, 8],
  multiplyBy: 5,
  multiply () {
    return this.numbers.map((number) => number * this.multiplyBy)
  }

}

console.log(multiplier.multiply())
