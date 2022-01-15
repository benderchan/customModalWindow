$ = {}

window.$ = $

// Objects
// const user = {
//   name: 'Jhon',
//   surname: 'Smith',
// }

// user.name = 'Pete'
// delete user.name

// let schedule = {
//   name: 123,
// }
// function isEmpty(obj) {
//   for (const key in obj) {
//     return false
//   }
//   return true
// }

// schedule['8:20'] = 'getup'

// let salaries = {
//   jhon: 100,
//   ann: 160,
//   pete: 130,
// }

// let sum = 0
// for (sal in salaries) {
//   sum += salaries[sal]
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'my menu',
// }

// function multiplyNumeric(menu) {
//   for (key in menu) {
//     if (typeof menu[key] === 'number') {
//       menu[key] *= 2
//     }
//   }
// }

// multiplyNumeric(menu)

// let user = {
//   name: 'Джон',
//   go: function () {
//     alert(this.name)
//   },
// }
// user.go() // ошибка

// let calculator = {
//   read() {
//     this.a = +prompt('a?', 0)
//     this.b = +prompt('b?', 0)
//   },
//   sum() {
//     return this.a + this.b
//   },
//   mul() {
//     return this.a * this.b
//   },
// }

// calculator.read()
// alert(calculator.sum())
// alert(calculator.mul())

// console.log(calculator.a)

// let ladder = {
//   step: 0,
//   up() {
//     this.step++
//     return this
//   },
//   down() {
//     this.step--
//     return this
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     alert(this.step)
//     return this
//   },
// }

// ladder.up().up().down().showStep()

// function A() {}
// function B() {}

// let a = new A()
// let b = new B()

// alert(a == b) // true

// function Calculator() {
//   this.a = +prompt('a?', 0)
//   this.b = +prompt('b?', 0)
//   this.read = function () {
//     return this.a, this.b
//   }
//   this.sum = function () {
//     return this.a + this.b
//   }
//   this.mul = function () {
//     return this.a * this.b
//   }
// }

// let calculator = new Calculator()
// calculator.read()

// alert('Sum=' + calculator.sum())
// alert('Mul=' + calculator.mul())

// function Accumulator(startingValue) {
//   this.value = startingValue
//   this.read = function () {
//     const promptValue = +prompt('Add value')
//     this.value += promptValue
//   }
// }

// let accumulator = new Accumulator(1) // начальное значение 1

// accumulator.read() // прибавит ввод prompt к текущему значению
// accumulator.read() // прибавит ввод prompt к текущему значению

// alert(accumulator.value) // выведет сумму этих значений
