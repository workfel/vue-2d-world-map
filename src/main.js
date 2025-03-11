import Vue from "vue";
import App from "./App.vue";
import VueVectorMap from "vuevectormap";
import "jsvectormap/dist/maps/world.js";
import "jsvectormap/dist/css/jsvectormap.css";

Vue.config.productionTip = false;

Vue.use(VueVectorMap, {
  backgroundColor: "#FFF"
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
