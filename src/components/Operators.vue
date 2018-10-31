<template>
    <div class="calculator__operations" @click=sendOperatorEvent>
            <div class="calculator__block calculator__block--basic-math">
            <div class="calculator__operator calculator__operator--plus">+</div>
            <div class="calculator__operator calculator__operator--minus">-</div>
            <div class="calculator__operator calculator__operator--times">&times;</div>
            <div class="calculator__operator calculator__operator--divide">&divide;</div>
        </div>
        <div class="calculator__block calculator__block--advanced-math">
            <div class="calculator__operator calculator__operator--sqrt">&radic;</div>
            <div class="calculator__operator calculator__operator--quadratic-power">X^2</div>
            <div class="calculator__operator calculator__operator--power">X^X</div>
            <div class="calculator__operator calculator__operator--decimal-logarithmus">log(X)</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Operators",
    methods: {
        sendOperatorEvent(evt) {
            this.$emit('operator-clicked', evt.srcElement.className)
        },
    }
}
</script>

