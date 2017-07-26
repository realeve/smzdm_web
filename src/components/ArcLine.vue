<template>
    <svg width="100%" viewBox="0 0 1000 31" version="1.1" class="wave-svg">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M1021,31.3211002 L1021,11.1726624 C1021,11.1726624 912.046875,24.8132884 717.960938,24.8132884 C523.875,24.8132884 398.609375,-0.534368356 243.921875,0.00860021491 C89.234375,0.551568786 -3,9.73858068 -3,9.73858068 L-3,31.3211002 L1021,31.3211002 Z" :fill="fill"></path>
        </g>
    </svg>
</template>

<script>

export default {
    name:'arc-line',
    props: {
        fill: {
            default: '#f5f5f5'
        }
    }
};
</script>

<style scoped>
.wave-svg {
    transform: translate(0, -96%)
}
</style>
