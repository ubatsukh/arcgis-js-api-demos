import FeatureLayer = require("esri/layers/FeatureLayer");
import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import TimeSlider = require("esri/widgets/TimeSlider");
import Legend = require("esri/widgets/Legend");
import Expand = require("esri/widgets/Expand");
import Basemap = require("esri/Basemap");
import SimpleRenderer = require("esri/renderers/SimpleRenderer");
import UniqueValueRenderer = require("esri/renderers/UniqueValueRenderer");
import SimpleMarkerSymbol = require("esri/symbols/SimpleMarkerSymbol");
import SimpleFillSymbol = require("esri/symbols/SimpleFillSymbol");
import SizeVariable = require("esri/renderers/visualVariables/SizeVariable");

const colors = [ "#FDF2DD", "#fed98e", "#fe9929", "#d95f0e", "#993404" ];
const smokeLayer = new FeatureLayer({
  url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/NDGD_SmokeForecast_v1/FeatureServer/0",
  effect: "blur(5px) brightness(70%) drop-shadow(1px 1px 1px gray)",
  opacity: 0.7,
  popupTemplate: null,
  renderer: new UniqueValueRenderer({
    field: "smoke_classdesc",
    defaultSymbol: new SimpleFillSymbol({ 
      color: null
    }),
      uniqueValueInfos: [{
        value: "0 - 3",
        symbol: new SimpleFillSymbol({
          outline: null,
          color: colors[0],
        })
      }, {
        value: "3 - 25",
        symbol: new SimpleFillSymbol({
          color: colors[1],
          outline: null,
        })
      }, {
        value: "25 - 63",
        symbol: new SimpleFillSymbol({
          color: colors[2],
          outline: null,
        })
      }, {
        value: "63 - 158",
        symbol: new SimpleFillSymbol({
          color: colors[3],
           outline: null,
        })
      },{
        value: "158 - 1000",
        symbol: new SimpleFillSymbol({
          color: colors[4],
           outline: null,
        })
      }],
  })
});

const firesLayer = new FeatureLayer({
  url:
    "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USA_Wildfires_v1/FeatureServer/0",
  effect: "bloom(2.8, 1.2px, 0.2)",
  renderer: new SimpleRenderer({
    symbol: new SimpleMarkerSymbol({
      color: "#ee7600",
      outline: null,
      size: 5
    }),
    visualVariables: [
      new SizeVariable({
        field: "CalculatedAcres",
        stops: [
          { value: 0, size: 0 },
          { value: 1000, size: 6 },
          { value: 10000, size: 8 },
          { value: 50000, size: 10 },
          { value: 100000, size: 12 }
        ]
      })
    ]
  })
});

firesLayer.createPopupTemplate();

// Firefly Imagery Hybrid
const basemap = new Basemap({
  portalItem: {
    id: "9e557abc61ce41c9b8ec8b15800c20d3"
  }
});

const map = new EsriMap({
  basemap: basemap,
  layers: [smokeLayer, firesLayer]
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  zoom: 4,
  center: [-100, 38],
  constraints: {
    minScale: 73957191
  },
  popup: {
    defaultPopupTemplateEnabled: true
  }
});
view.ui.add("titleDiv", "top-right");
view.ui.add("effectsDiv", "top-right");

// get a reference to the applyBloom check box
const chkToggleEffects = <HTMLInputElement>document.getElementById("toggleEffects");
// call updateEffects function when user clicks the checkbox
chkToggleEffects.addEventListener("click", updateEffects);

function updateEffects() {
  // set the layer effect to null if the user unchecked the applyBloom checkbox
  if (!chkToggleEffects.checked) {
    smokeLayer.effect = null;
    firesLayer.effect = null; 
    return;
  }
  smokeLayer.effect = "blur(5px) brightness(70%) drop-shadow(1px 1px 1px gray)";
  firesLayer.effect = "bloom(2.8, 1.2px, 0.2)";
 }

// set up time slider
view.whenLayerView(smokeLayer).then((lv) => {
  const { fullTimeExtent, interval } = smokeLayer.timeInfo;
  
  const timeSlider = new TimeSlider({
    container: "timeSlider",
    mode: "time-window",
    view: view,
    timeVisible: true,
    fullTimeExtent,
    playRate: 100,
    loop: true,
    stops: {
      interval
    }
  });
  view.ui.add(timeSlider, "manual");
});

const legendExpand = new Expand({
  expandIconClass: "esri-icon-collection",
  expandTooltip: "Legend",
  view: view,
  content: new Legend({
    view: view,
     layerInfos: [{
       layer: firesLayer,
       title: "Current fires"
     }] as any
  }),
  expanded: false
});

view.ui.add(legendExpand, "top-left");