class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGretting () {
    return `Hi!, ${this.name}`
  }
  getDescription () {
    return `${this.name} is ${this.age} years old`
  }
}

class Student extends Person {
  constructor (name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor () {
    return !!this.major
  }
  getDescription () {
    let description = super.getDescription()
    if (this.major) {
      description += `.  Their major is ${this.major}`
    }

    return description
  }
}

class Traveler extends Person {
  constructor (name, age, country) {
    super(name, age)
    this.country = country
  }
  getGretting () {
    let about = super.getGretting()
    if (this.country) {
      about += `   He live in ${this.country}`
    }
    return about
  }
}

const me = new Traveler('Andrew Mead', 26, 'Philadelphia')

console.log(me.getGretting())

const other = new Traveler()
console.log(other.getGretting())
