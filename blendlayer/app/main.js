define(["require", "exports", "app/BlendLayer", "esri/layers/TileLayer", "esri/Map", "esri/views/MapView", "esri/widgets/LayerList"], function (require, exports, BlendLayer, TileLayer, EsriMap, MapView, LayerList) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var natGeoLayer = new TileLayer({
        url: "https://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer"
    });
    var hillShadeLayer = new TileLayer({
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
    var map = new EsriMap({
        layers: [
            natGeoLayer,
            blendLayer
        ]
    });
    // create a new instance of MapView.
    var view = new MapView({
        map: map,
        container: "viewDiv",
        center: [-112.656079, 36.301955],
        zoom: 11,
    });
    // create a new layer list widget and add it to the view
    var layerList = new LayerList({
        view: view,
    });
    view.ui.add(layerList, "top-right");
});
//# sourceMappingURL=main.js.map