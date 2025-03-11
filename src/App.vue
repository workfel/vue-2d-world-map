<template>
  <div id="app">
    <!-- <div id="svgMap"></div> -->
    <vuevectormap
      ref="map"
      width="750px"
      height="100vh"
      :labels="labels"
      :series="series"
      :markers="markers"
      :showTooltip="false"
      :selectedMarkers="selectedMarkers"
      :markersSelectable="true"
      :markersSelectableOne="true"
      :markerStyle="markerStyle"
      :markerLabelStyle="markerLabelStyle"
      :selectedRegions="selectedRegions"
      :regionsSelectable="true"
      :regionsSelectableOne="true"
      :regionStyle="regionStyle"
      :regionLabelStyle="regionLabelStyle"
    ></vuevectormap>
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
export default {
  mounted() {
    this.map = this.$refs.map.getMap();
    this.map.scale = 2;
  },
  data: () => ({
    map: null,
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
            return marker.name + " " + marker.countRace;
          },
        },
      };
    },

  },
};
</script>
