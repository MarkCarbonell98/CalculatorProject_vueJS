<template>
  <div id="app">
    <h1 class="title">Hellou</h1>
    <div class="calculator__container">
      <div class="calculator">
        <div class="calculator__screen">
          <span class="calculator__screen--result">{{this.firstNumber}}</span>
        </div>
        <Numbers @number-clicked="handleNumberClick"/>
        <Operators @operator-clicked="handleOperatorClick">
        </Operators>
        <Equals @equals-clicked="handleEqualsClick" @delete-clicked="handleDeleteClick"></Equals>  
      </div>
    </div>
  </div>
</template>

<script>
import Numbers from "@/components/Numbers";
import Operators from "@/components/Operators";
import Equals from "@/components/Equals"
export default {
  name: "Calculator",
  components: {
    Numbers,
    Operators,
    Equals
  },
  data() {
    return {
      firstNumber: "",
      newNumber: "",
      result: "",
    }
  },

  methods: {
    handleNumberClick(passedNumber = {}) {
      this.firstNumber += passedNumber.number;
      this.newNumber = this.firstNumber;
    },


    handleOperatorClick(passedOperator = {}) {
      const operator = passedOperator.split("--")[1];
      if(operator == "plus") {
        this.newNumber += " + ";
        this.firstNumber += " + ";
      } else if (operator == "minus") {
        this.newNumber += " - ";
        this.firstNumber += " - ";
      } else if (operator == "times") {
        this.newNumber += " * ";
        this.firstNumber += " * ";
      } else if (operator == "divide") {
        this.newNumber += " / "
        this.firstNumber += " / ";
      } else if (operator == "sqrt") {
        console.log("no functionality for this yet");
      } else if (operator == "quadratic-power") {
        console.log("no functionality for this yet");
      } else if (operator == "power") {
        console.log("no functionality for this yet");
      } else if (operator == "decimal-logarithmus") {
        console.log("no functionality for this yet");
      }
    },


    handleDeleteClick(passedDelete) {
      const operator = passedDelete.split("--")[1];
      if(operator == "delete-current") {
        this.newNumber = this.newNumber.slice(0, this.newNumber.length -1);
      } else if (operator == "delete-all") {
        this.newNumber = "";
        this.firstNumber = "";
      }
    },


    handleEqualsClick() {
      const equationUnspaced = this.firstNumber.replace(/\s/g, "");
      const numbers = equationUnspaced.split(/[+/*-]/g).filter(c => c == "" ? false : true).map(c => parseInt(c));
      const signs = equationUnspaced.split(/[\d]/g).filter(c => c == "" ? false : true);
      const equation = [equationUnspaced].join(',');
      console.log(signs, numbers, equation);
      let result = "";



      // for(let number of numbers) {
      //   for(let sign of signs) {
      //     if(sign == "-") {
      //       result += "-";
      //     } else if(sign == "+") {
      //       result += "+";        
      //     }
      //   }
      //   result += number;
      //   result = parseInt(result);
      //   console.log(result);
      // }
      this.newNumber = eval(this.firstNumber);
      try {
        this.newNumber = eval(this.newNumber);
        this.firstNumber = this.newNumber;
        if(this.newNumber == Infinity || this.newNumber == -Infinity) {
          this.newNumber = "Math Error";
        }
      } catch (err) {
        if(err instanceof SyntaxError) {
          this.firstNumber = "";
          this.newNumber = "Syntax Error";
        }
      }
    },

    cleanInput() {
      const equationUnspaced = this.firstNumber.replace(/\s/g, "");
      const numbers = equationUnspaced.split(/[+/*-]/g).filter(c => c == "" ? false : true);
      const signs = equationUnspaced.split(/[\d]/g).filter(c => c == "" ? false : true);
      console.log(signs, numbers);
      console.log(eval("log(1000)"));
    },
  },
}
</script>


<style lang="scss">

  html,body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 30px;
  }

  .calculator {
    background:  #11c8ee;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    padding-bottom: 20px;
    box-shadow: 6px 8px 8px 4px #0bb5e6;
    border: 4px solid rgba(1, 247, 255, 0.159);

    &__container {
      padding: 20px;
      display: flex;
      justify-content: center;
      // border: solid 1px black;
    }

    &__screen {
      width: 90%;
      height: 5rem;
      margin: 0 auto;
      background-color: #69f426;
      margin-top: 20px;
      border-radius: 3px;
      display: flex;
      justify-content: flex-end;
      align-items:flex-end;
      border: solid 5px #008000b4;
      overflow: hidden;

      &--result {
        padding: 20px;
        font-size: 50px;
      }
    }

    &__numbers {
      display: flex;
      width: 90%;
      margin: 0 auto;
    }

    %button-styles {
      width: 4rem;
      height: 4rem;
      background: linear-gradient(135deg ,grey, #606060);
      box-shadow: 0px 0px 9px 4.5px rgba(19, 2, 2, 0.664);
      border-radius: 3px;
      margin: 10px;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;

      &:active {
        transform: translate(2px, -2px);
        transition: all ease .15s;
        box-shadow: none;
      }
    }

    &__number {
      @extend %button-styles;
    }

    &__operations {
      width: 90%;
      margin: 0 auto;
    }

    &__block {
      justify-content: center;
      display: flex;

      &--options {
        width: 90%;
        margin: 0 auto;
      }
    }

    &__operator {
      @extend %button-styles;
      flex-grow: 1;

    }
    
  }

  #equals {
    font-size: 60px; 
  }

  
</style>
