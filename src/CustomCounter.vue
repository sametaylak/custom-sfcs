<template>
    <div>
        <custom-button @click="onIncreaseClick">
            Increase
        </custom-button>
        <custom-button @click="onDecreaseClick">
            Decrease
        </custom-button>
        <span>{{ count }}</span>
    </div>
</template>

<script>
import CustomButton from './CustomButton.vue';

export default {
    name: 'CustomCounter',
    components: {
        CustomButton,
    },
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        onIncreaseClick() {
            this.count++;
        },
        onDecreaseClick() {
            this.count--;
        },
    },
};
</script>
