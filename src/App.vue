<template>
  <div id="app">
    <h1>Hellou</h1>
    <div class="calculator__container">
      <div class="calculator">
        <div class="calculator__screen">
          <span class="calculator__screen--result">{{this.newNumber}}</span>
        </div>
        <Numbers @number-clicked="handleNumberClick"/>
        <Operators @operator-clicked="handleOperatorClick">
        </Operators>
        <Equals @equals-clicked="handleEqualsClick"></Equals>  
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
      firstNumber: null,
      newNumber: "",
    }
  },

  methods: {
    handleNumberClick(passedNumber = {}) {
      this.newNumber += passedNumber.number;
    },
    handleOperatorClick(passedOperator = {}) {
      console.log('TCL: handleOperatorClick -> passedOperator', passedOperator);
      console.log('operator clicked');
    },
    handleEqualsClick() {
      console.log("equals was clicked");
    }
  },
}
</script>


<style lang="scss">

  html,body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 30px;
  }

  .calculator {
    background-color: #11c8ee;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    padding-bottom: 20px;

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
