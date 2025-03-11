<template>
  <div id="app">
    <div id="svgMap"></div>
  </div>
</template>
<style>
#svgMap,
#app,
.svgMap-map-wrapper,
body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
<script>
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";
export default {
  mounted() {
    // this.map = this.$refs.map.getMap();
    // // You can now access all Jsvectormap's methods.
    // console.log(this.map);

    // this.map.scale = 2;
    new svgMap({
      targetElementID: "svgMap",
      initialZoom: 4,
      data: {
        data: {
          countRace: {
            name: "Count Race",
            format: "{0}",
            thousandSeparator: ",",
            thresholdMax: 10,
            thresholdMin: 1,
          },
        },
        applyData: "countRace",
        values: {
          FR: { countRace: 10 },
          US: { countRace: 1 },
          EG: { countRace: 1 },
          DE: { countRace: 2 },
          ES: { countRace: 6 },
          // ...
        },
      },
      noDataText: "Pas de course réalisée",
    });
  },
  data: () => ({
    map: null,

    // Start markers
    // markers: [
    //   { name: "Palestine", coords: [31.5, 34.8] },
    //   { name: "Russia", coords: [61, 105] },
    // ],
    // markerStyle: {},
    // markerLabelStyle: {},
    // selectedMarkers: [0],

    // Regions
    regionStyle: {
      initial: { fill: "#ccc" },
    },
    regionLabelStyle: { initial: { fill: "orange" } },
    selectedRegions: [],

    // Series
    series: {
      regions: [
        {
          attribute: "fill",
          scale: {
            scale1: "oklch(0.979 0.021 166.113)",
            scale2: "oklch(0.979 0.021 166.113)",
            scale3: "oklch(0.905 0.093 164.15)",
            scale4: "oklch(0.845 0.143 164.978)",
            scale5: "oklch(0.765 0.177 163.223)",
          },
          values: {
            US: "scale1",
            EG: "scale2",
            FR: "scale5",
            IT: "scale3",
            BR: "scale2",
          },
        },
      ],
    },
  }),
  computed: {
    labels() {
      // Labels for markers and regions
      return {
        markers: {
          render(marker) {
            return marker.name;
          },
        },
      };
    },
  },
};
</script>
