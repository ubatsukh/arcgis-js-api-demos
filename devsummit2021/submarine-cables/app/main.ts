import FeatureLayer = require("esri/layers/FeatureLayer");
import MapImageLayer = require("esri/layers/MapImageLayer")
import TileLayer = require("esri/layers/TileLayer")
import VectorTileLayer = require("esri/layers/VectorTileLayer")
import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import TimeSlider = require("esri/widgets/TimeSlider");
import TimeInterval = require("esri/TimeInterval");
import TimeExtent = require("esri/TimeExtent");
import SimpleRenderer = require("esri/renderers/SimpleRenderer");
import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");
import SimpleMarkerSymbol = require("esri/symbols/SimpleMarkerSymbol");
import FeatureLayerView = require("esri/views/layers/FeatureLayerView");
import FeatureEffect = require("esri/views/layers/support/FeatureEffect");

( async () => {
// sub marine cables layer
const cablesLayer = new FeatureLayer({
  url:
    "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/cables/FeatureServer/0",
  renderer: new SimpleRenderer({
    symbol: new SimpleLineSymbol({
      color: "rgba(254,14,218, .35)",
      width:"0.75px"
    })
  }),
});

// cities layer connected by submarine cables
const cityLayer = new FeatureLayer({
  url:
    "https://services.arcgis.com/6DIQcwlPy8knb6sg/ArcGIS/rest/services/SubmarineCables/FeatureServer/1",
  renderer: new SimpleRenderer ({
    symbol: new SimpleMarkerSymbol({
      color: "#0069A7",
      size: "6px",
      outline: null
    })
  }),
  effect: "bloom(1.5, 1px, 0.3)"
});

const tileLayer = new TileLayer({
  portalItem: {
  id: "a66bfb7dd3b14228bf7ba42b138fe2ea"
},
  blendMode: "luminosity"
});

const vtLayer = new VectorTileLayer({
  portalItem: {
  id: "1ddbb25aa29c4811aaadd94de469856a"
  },
  blendMode: "soft-light"
});

const miLayer = new MapImageLayer({
  url: "https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",
  blendMode: "hard-light",
  effect: "invert() saturate(0)",
  maxScale: 36112
});

const map = new EsriMap({
   basemap: {
    baseLayers: [tileLayer, vtLayer, miLayer]
  },
  layers: [cablesLayer, cityLayer]
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  zoom: 3,
  background: {
    color: "#1b528b"
  }
});
// view.ui.add("infoDiv", "top-right");
view.ui.add("blendDiv", "top-right");

// get a reference to the applyBloom check box
const chkToggleBlending = <HTMLInputElement>document.getElementById("toggleBlending");
// call updateEffects function when user clicks the checkbox
chkToggleBlending.addEventListener("click", updateBlending);

function updateBlending() {
  // set the layer effect to null if the user unchecked the applyBloom checkbox
  if (!chkToggleBlending.checked) {
    tileLayer.blendMode = "normal";
    vtLayer.blendMode = "normal";
    miLayer.blendMode = "normal";
    return;
  }
  tileLayer.blendMode = "luminosity";
  vtLayer.blendMode = "soft-light";
  miLayer.blendMode = "hard-light";
 }

const cablesLayerView = await view.whenLayerView(cablesLayer) as FeatureLayerView;

// watch for time slider timeExtent change
const timeSlider = new TimeSlider({
  container: "timeSlider",
  loop: true,
  playRate: 600,
  fullTimeExtent: cablesLayer.timeInfo.fullTimeExtent,
  stops: {
    interval: new TimeInterval({
      value: 1,
      unit: "years"
    })
  }
});
view.ui.add(timeSlider, "bottom-left");

timeSlider.watch("timeExtent", () => {
  cablesLayer.definitionExpression =
    "year <= '" + timeSlider.timeExtent.end.getFullYear() + "'";

  cablesLayerView.effect = new FeatureEffect({
    filter: {
      timeExtent: new TimeExtent({
        start: timeSlider.timeExtent.start,
        end: timeSlider.timeExtent.end
      })
    },
    includedEffect: "bloom(3, 0.5px, 0.1)",
    excludedEffect: "blur(2px)"
  });
  
  // var query = cablesLayerView.effect.filter.createQuery();
  // const featureSet = await cablesLayerView.queryFeatures(query);
  // document.getElementById("stats").innerHTML = featureSet.features.length.toString();
});
})();