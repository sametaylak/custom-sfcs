<template>
    <div id="app">
        <span>Hello SFCs</span>
        <custom-counter/>
    </div>
</template>

<script>
import CustomCounter from '@custom-sfcs/CustomCounter';

export default {
    name: 'app',
    components: {
        CustomCounter,
    },
};
</script>

