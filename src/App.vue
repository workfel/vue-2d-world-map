<template>
  <div id="app">
    <vuevectormap
      ref="map"
      width="750px"
      height="100vh"
      :labels="labels"
      :series="series"
      :markers="markers"
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

<script>
export default {
  mounted() {
    this.map = this.$refs.map.getMap();
    // You can now access all Jsvectormap's methods.
    // console.log(this.map);
  },
  data: () => ({
    map: null,

    // Start markers
    markers: [
      { name: "Palestine", coords: [31.5, 34.8] },
      { name: "Russia", coords: [61, 105] },
    ],
    markerStyle: {},
    markerLabelStyle: {},
    selectedMarkers: [0],

    // Regions
    regionStyle: {},
    regionLabelStyle: { initial: { fill: "orange" } },
    selectedRegions: ["CN"],

    // Series
    series: {
      regions: [
        {
          attribute: "fill",
          legend: {
            title: "Play around with series",
          },
          scale: {
            scale1: "red",
            scale2: "blue",
            scale3: "green",
          },
          values: {
            US: "scale1",
            EG: "scale2",
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
