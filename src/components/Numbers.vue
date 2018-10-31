<template>
    <div class="calculator__numbers" @click="sendEvent">
        <div class="calculator__number calculator__number--one">1</div>
        <div class="calculator__number calculator__number--two">2</div>
        <div class="calculator__number calculator__number--three">3</div>
        <div class="calculator__number calculator__number--four">4</div>
        <div class="calculator__number calculator__number--five">5</div>
        <div class="calculator__number calculator__number--six">6</div>
        <div class="calculator__number calculator__number--seven">7</div>
        <div class="calculator__number calculator__number--eight">8</div>
        <div class="calculator__number calculator__number--nine">9</div>
        <div class="calculator__number calculator__number--zero">0</div>
    </div>
</template>

<script>
export default {
    name: "Numbers",
    data() {
        return {

        }
    },
    methods: {
        sendEvent(evt) {
            const data = {number: evt.target.textContent, element: evt.srcElement};
            this.$emit("number-clicked", data);
        }
    }
}
</script>

