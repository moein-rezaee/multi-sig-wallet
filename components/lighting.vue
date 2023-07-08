<template>
    <corner-light class="left"></corner-light>
    <corner-light class="right"></corner-light>
    <corner-light class="bottom">
        <p>{{ titr }}</p>
    </corner-light>
</template>


<script setup>
const { titr } = defineProps(['titr']);
</script>