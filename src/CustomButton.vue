<template>
    <button @click="onClick">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'CustomButton',
    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
</script>

<style scoped>
    button {
        background: red;
    }
</style>
