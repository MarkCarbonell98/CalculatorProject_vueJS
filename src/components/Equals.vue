<template>
    <div class="calculator__block calculator__block--options">
        <div @click="sendDeleteEvent" class="calculator__operator calculator__operator--delete-all" >CA</div>
        <div @click="sendDeleteEvent" class="calculator__operator calculator__operator--delete-current">C</div>
        <div class="calculator__operator calculator__operator--equals" id="equals" @click="sendEqualsEvent">=</div>
    </div>
</template>

<script>
export default {
    name: "Equals",
    methods: {
        sendEqualsEvent(evt) {
            this.$emit('equals-clicked');
        },
        sendDeleteEvent(evt) {
            this.$emit('delete-clicked', evt.srcElement.className)
        }
    }
}
</script>

