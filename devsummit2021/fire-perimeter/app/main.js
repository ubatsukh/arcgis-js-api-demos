define(["require", "exports", "esri/layers/FeatureLayer", "esri/Map", "esri/views/MapView", "esri/widgets/TimeSlider", "esri/TimeExtent", "esri/renderers/SimpleRenderer", "esri/symbols/SimpleFillSymbol", "esri/Basemap", "esri/views/layers/support/FeatureFilter"], function (require, exports, FeatureLayer, EsriMap, MapView, TimeSlider, TimeExtent, SimpleRenderer, SimpleFillSymbol, Basemap, FeatureFilter) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Firefly Imagery Hybrid
    const basemap = new Basemap({
        portalItem: {
            id: "9e557abc61ce41c9b8ec8b15800c20d3"
        }
    });
    const map = new EsriMap({
        basemap
    });
    // center around sonoma county
    const view = new MapView({
        container: "viewDiv",
        map,
        center: [-122.7798, 38.6837],
        zoom: 11
    });
    // only load kincade fire perimeters from 2019 CA fire perimeters
    const featureLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Historic_GeoMAC_Perimeters_2019/FeatureServer/0",
        definitionExpression: "incidentname =	'KINCADE'",
        outFields: ["*"],
        renderer: new SimpleRenderer({
            symbol: new SimpleFillSymbol({
                color: "#FAD0C6",
                outline: {
                    color: "#520B02",
                    width: "2px"
                }
            })
        }),
        effect: "brightness(600%)",
        blendMode: "overlay",
    });
    map.add(featureLayer);
    // add a new time slider without view settings
    const timeSlider = new TimeSlider({
        container: "timeSlider",
        mode: "instant",
        timeVisible: true,
        playRate: 200
    });
    view.ui.add(timeSlider, "bottom-left");
    let dates = new Array;
    view.whenLayerView(featureLayer).then((layerView) => {
        const query = featureLayer.createQuery();
        query.orderByFields = ["perimeterdatetime"];
        // query all features from the kincade fire perimeters
        // loop through perimeterdatetime field and add dates to
        // dates array and set the time slider stops to dates array
        featureLayer.queryFeatures(query).then((results) => {
            results.features.forEach((feature) => {
                const dt = new Date(feature.attributes.perimeterdatetime);
                dates.push(dt);
            });
            timeSlider.stops = { dates };
            // set the time slider's full time extent to cover
            // kincade fire perimeters date
            timeSlider.fullTimeExtent = new TimeExtent({
                start: dates[0],
                end: dates[dates.length - 1]
            });
            const start = dates[0].getTime();
            const where = `perimeterdatetime = ${start}`;
            layerView.filter = new FeatureFilter({
                where
            });
        });
        // watch time slider timeExtent event and 
        // set layer view filter on fires perimeter layer
        // to show fire perimeter that falls within the time extent
        timeSlider.watch("timeExtent", () => {
            const start = timeSlider.timeExtent.start.getTime();
            const where = `perimeterdatetime = ${start}`;
            layerView.filter = new FeatureFilter({
                where
            });
        });
    });
});
//# sourceMappingURL=main.js.map