const avg = (x, y, z) => { return (x + y + z)/3 }

const adder = new Vue({
  el: '#average',
  data: {
    guest: 'Vijay',
    firstNumber: 5,
    secondNumber: 3,
    thirdNumber: 1
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      const k = parseInt(this.thirdNumber)
      return `${this.guest}, your average is ${avg(i, j, k)}.`
    }
  }
})