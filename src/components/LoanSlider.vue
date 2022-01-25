<template>
  <div class="calculator-container">
    <h1>Lånekalkyl</h1>
    <div class="loan-box">
      <div class="row-box">
        <div class="loan-info">
          <p>Lånebelöpp</p>
          <h3>{{ loanAmount }} SEK</h3>
        </div>
        <input
          id="slider"
          class="loan-slider"
          type="range"
          v-model="loanAmount"
          min="20000"
          max="200000"
          step="10000"
        />
      </div>
      <div class="row-box">
        <div class="loan-info">
          <p>Lånetid</p>
          <h3>{{ loanPeriod }} år</h3>
        </div>
        <input
          class="loan-slider"
          type="range"
          v-model="loanPeriod"
          :min="2"
          :max="10"
          :step="1"
        />
        <div class="month-cost">
          <label>Månadskostnad</label>
          <p>{{ monthlyCost }} SEK</p>
        </div>
      </div>
      <div class="button-wrapper">
        <button
        class="calculate-button" @click="onPress">Till ansökan</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoanSlider',
  computed: {
    monthlyCost() {
      let x =
        this.loanAmount * 0.00825 * Math.pow(1 + 0.00825, this.loanPeriod * 12)
      let y = Math.pow(1 + 0.00825, this.loanPeriod * 12) - 1
      let totalAmount = x / y
      return totalAmount.toFixed(0)
    },
  },
  data() {
    return {
      loanAmount: 100000,
      loanPeriod: 10,
      monthlyPay: 0,
    }
  },
  methods: {
    onPress() {
      let months = this.loanPeriod * 12
      console.log(
        `loan-application/?amount=${this.loanAmount}&months=${months}`
      )
    },
  },
}
</script>
<style scoped>
.calculator-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
h1 {
  padding: 2rem;
}
.loan-box {
  width: 100%;
  z-index: 1;
}
.row-box {
  width: 100%;
  padding: 1rem 0;
}
.loan-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1px 20px;
  align-items: center;
}
.loan-slider {
  -webkit-appearance: none;
  width: 95%;
  appearance: none;
  outline: none;
  padding: 5px 0;
  background: transparent;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
}
.loan-slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  border-radius: 3px;
  cursor: pointer;
  background: #121283;
}
.loan-slider::-webkit-slider-thumb {
  margin-top: -7px;
  background: #121283;
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transform: scale(1);
  transform: scale(1);
  appearance: none;
  -webkit-appearance: none;
}
.loan-slider:focus {
  outline: none;
}

.loan-slider::-moz-range-track {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  cursor: pointer;
  background: hsl(223, 50%, 87%);
}
.loan-slider::-moz-range-thumb {
  margin-top: -7px;
  background: #4d0ae9;
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  box-shadow: none;
  transform: scale(1);
}

.loan-slider:-moz-focusring {
  outline-offset: -1px;
}
.loan-slider::-ms-track {
  width: 100%;
  height: 4px;
  border-radius: 3px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 14px 0;
  color: transparent;
}
.loan-slider::-ms-fill-lower {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  cursor: pointer;
  background: #4d0ae9;
}
.loan-slider::-ms-fill-upper {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  cursor: pointer;
  background: rgba(0, 0, 160, 0.4);
}
.loan-slider::-ms-thumb {
  margin-top: -7px;
  background: #28013a;
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  box-shadow: none;
  transform: scale(1);
  margin-top: 0;
}
.loan-slider:active::-webkit-slider-thumb {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}

.loan-slider:hover::-ms-thumb {
  transform: scale(1.5);
}
.loan-slider:focus::-moz-range-thumb,
.loan-slider:focus::-ms-thumb,
.loan-slider:focus::-webkit-slider-thumb {
  transform: scale(1.4);
}
.loan-slider::-moz-range-track {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  cursor: pointer;
}
.loan-slider::-moz-range-thumb {
  width: 30px;
  height: 30px;
  border: 5px rgba(98, 98, 163, 0.4) solid;
  background: rgb(142, 142, 252);
  cursor: pointer;
}
.loan-slider::-moz-range-progress {
  width: 100%;
  height: 4px;
  border-radius: 3px;
  cursor: pointer;
  background: #28013a;
}
.calculate-button {
  padding: 1rem 2rem;
  border-radius: 25px;
  background-color: rgba(0, 0, 160, 0.4);
  color: #fff;
  font-size: 18px;
  line-height: 1.2em;
  border: none;
  cursor: pointer;
}
.month-cost {
  padding: 1rem 0;
  margin-top: 10px;
}

@media screen and (min-width: 900px) and (max-width: 1440px) {
  .calculator-container {
    width: 46%;
    padding: 4rem 0;
    border: 1px rgb(216, 210, 210) solid;
    box-shadow: 15px 20px 70px -10px;
    border-radius: 0.5rem;
  }
}
</style>