import BlendLayer = require("app/BlendLayer")
import TileLayer = require("esri/layers/TileLayer");
import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import LayerList = require("esri/widgets/LayerList");

const natGeoLayer = new TileLayer({
  url: "https://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer"
});

const hillShadeLayer = new TileLayer({
  url: "https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"
});

// Create a new instance of BlendLayer
// add natGeoLayer and hillShadeLayer to its 
// multiplyLayers property
var blendLayer = new BlendLayer({
  multiplyLayers: [
    hillShadeLayer,
    natGeoLayer
  ],
  title: "Blended NatGeo World Map",
  copyright: "Blended National Geographic Layer"
});

// create a new instance of Map
// add the blend layer to the map
const map = new EsriMap({
  layers: [
    natGeoLayer,
    blendLayer
  ]
});

// create a new instance of MapView.
const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-112.656079, 36.301955] as any,
  zoom: 11,
});

// create a new layer list widget and add it to the view
const layerList = new LayerList({
  view: view,
});
view.ui.add(layerList, "top-right");