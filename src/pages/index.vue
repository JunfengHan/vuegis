<template>
    <div id="map"></div>
</template>

<script lang="ts" setup>
import mapboxgl from 'mapbox-gl';
import { onMounted } from 'vue';

mapboxgl.accessToken = 'pk.eyJ1IjoibGVnZW5kMTEyMiIsImEiOiJjbGRqeWt4YjYxdnF6M3Zwa2J1NjA1YmF4In0.PDgjgMTV0dJczCUumpB6bA';

onMounted(() => {
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [-122.420679, 37.772537], // starting position [lng, lat]
        zoom: 13, // starting zoom
        style: 'mapbox://styles/legend1122/cldlbuu5i000p01mw01eohmmm', // style URL or style object
        // mapbox://styles/legend1122/cldlbuu5i000p01mw01eohmmm
        hash: true, // sync `center`, `zoom`, `pitch`, and `bearing` with URL
    });
});


</script>

<style lang="less" scoped>
    #map {
        width: 100%;
        height: 100%;
    }
</style>