<template>
    <div class="calculator__block calculator__block--options">
        <div class="calculator__operator calculator__operator--equals" id="equals" >&larr;</div>
        <div class="calculator__operator calculator__operator--equals" id="equals" >&rarr;</div>
        <div class="calculator__operator calculator__operator--equals" id="equals" @click="sendEqualsEvent">=</div>
    </div>
</template>

<script>
export default {
    name: "Equals",
    methods: {
        sendEqualsEvent(evt) {
            this.$emit('equals-clicked');
        }
    }
}
</script>

