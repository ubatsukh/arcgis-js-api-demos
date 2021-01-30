define(["require", "exports", "esri/layers/CSVLayer", "esri/layers/FeatureLayer", "esri/Map", "esri/views/MapView", "esri/widgets/TimeSlider", "esri/Basemap", "esri/core/watchUtils", "esri/symbols/CIMSymbol", "esri/renderers", "esri/symbols", "esri/layers/support/LabelClass", "esri/TimeInterval", "esri/TimeExtent", "esri/views/layers/support/FeatureFilter", "esri/views/layers/support/FeatureEffect"], function (require, exports, CSVLayer, FeatureLayer, EsriMap, MapView, TimeSlider, Basemap, watchUtils, CIMSymbol, renderers_1, symbols_1, LabelClass, TimeInterval, TimeExtent, FeatureFilter, FeatureEffect) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const states = new FeatureLayer({
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2",
        renderer: new renderers_1.SimpleRenderer({
            symbol: new symbols_1.SimpleFillSymbol({
                color: "#f0ebe4",
                outline: {
                    color: "#DCDCDC",
                    width: "0.5px"
                }
            })
        }),
        spatialReference: {
            wkid: 102003
        },
        effect: "drop-shadow(-10px, 10px, 6px gray)",
    });
    const csvLayer = new CSVLayer({
        url: "data/nps_establishments.csv",
        delimiter: ",",
        timeInfo: {
            startField: "date_est",
            interval: {
                unit: "years",
                value: 1
            }
        },
        popupTemplate: {
            title: "{unit_name}",
            content: "Established on <b>{date_est}</b> <br/><br/> {description}",
        },
        renderer: new renderers_1.SimpleRenderer({
            symbol: new CIMSymbol({
                "data": {
                    "type": "CIMSymbolReference",
                    "symbol": {
                        "type": "CIMPointSymbol",
                        "symbolLayers": [
                            {
                                "type": "CIMVectorMarker",
                                "enable": true,
                                "anchorPointUnits": "Relative",
                                "dominantSizeAxis3D": "Y",
                                "size": 15.75,
                                "billboardMode3D": "FaceNearPlane",
                                "frame": {
                                    "xmin": 0,
                                    "ymin": 0,
                                    "xmax": 21,
                                    "ymax": 21
                                },
                                "markerGraphics": [{
                                        "type": "CIMMarkerGraphic",
                                        "geometry": {
                                            "rings": [[
                                                    [15, 15],
                                                    [12, 15],
                                                    [16, 10],
                                                    [13, 10],
                                                    [17, 5],
                                                    [11, 5],
                                                    [11, 2],
                                                    [10, 2],
                                                    [10, 5],
                                                    [4, 5],
                                                    [8, 10],
                                                    [5, 10],
                                                    [9, 15],
                                                    [6, 15],
                                                    [10.5, 19],
                                                    [15, 15]
                                                ]]
                                        },
                                        "symbol": {
                                            "type": "CIMPolygonSymbol",
                                            "symbolLayers": [{
                                                    "type": "CIMSolidStroke",
                                                    "enable": true,
                                                    "capStyle": "Round",
                                                    "joinStyle": "Round",
                                                    "lineStyle3D": "Strip",
                                                    "miterLimit": 10,
                                                    "width": 0,
                                                    "color": [0, 0, 0, 255]
                                                },
                                                {
                                                    "type": "CIMSolidFill",
                                                    "enable": true,
                                                    "color": [0, 160, 0, 255]
                                                }]
                                        }
                                    }],
                                "scaleSymbolsProportionally": true,
                                "respectFrame": true
                            },
                            {
                                "type": "CIMVectorMarker",
                                "enable": true,
                                "colorLocked": true,
                                "anchorPointUnits": "Relative",
                                "dominantSizeAxis3D": "Y",
                                "size": 8,
                                "billboardMode3D": "FaceNearPlane",
                                "frame": {
                                    "xmin": -5,
                                    "ymin": -5,
                                    "xmax": 5,
                                    "ymax": 5
                                },
                                "markerGraphics": [{
                                        "type": "CIMMarkerGraphic",
                                        "geometry": {
                                            "rings": [[
                                                    [0, 5],
                                                    [0.87, 4.92],
                                                    [1.71, 4.7],
                                                    [2.5, 4.33],
                                                    [3.21, 3.83],
                                                    [3.83, 3.21],
                                                    [4.33, 2.5],
                                                    [4.7, 1.71],
                                                    [4.92, 0.87],
                                                    [5, 0],
                                                    [4.92, -0.87],
                                                    [4.7, -1.71],
                                                    [4.33, -2.5],
                                                    [3.83, -3.21],
                                                    [3.21, -3.83],
                                                    [2.5, -4.33],
                                                    [1.71, -4.7],
                                                    [0.87, -4.92],
                                                    [0, -5],
                                                    [-0.87, -4.92],
                                                    [-1.71, -4.7],
                                                    [-2.5, -4.33],
                                                    [-3.21, -3.83],
                                                    [-3.83, -3.21],
                                                    [-4.33, -2.5],
                                                    [-4.7, -1.71],
                                                    [-4.92, -0.87],
                                                    [-5, 0],
                                                    [-4.92, 0.87],
                                                    [-4.7, 1.71],
                                                    [-4.33, 2.5],
                                                    [-3.83, 3.21],
                                                    [-3.21, 3.83],
                                                    [-2.5, 4.33],
                                                    [-1.71, 4.7],
                                                    [-0.87, 4.92],
                                                    [0, 5]
                                                ]]
                                        },
                                        "symbol": {
                                            "type": "CIMPolygonSymbol",
                                            "symbolLayers": [{
                                                    "type": "CIMSolidStroke",
                                                    "enable": true,
                                                    "capStyle": "Round",
                                                    "joinStyle": "Round",
                                                    "lineStyle3D": "Strip",
                                                    "miterLimit": 10,
                                                    "width": 0.5,
                                                    "color": [167, 169, 172, 255]
                                                },
                                                {
                                                    "type": "CIMSolidFill",
                                                    "enable": true,
                                                    "color": [255, 255, 255, 255]
                                                }]
                                        }
                                    }
                                ],
                                "scaleSymbolsProportionally": true,
                                "respectFrame": true
                            }
                        ],
                        "haloSize": 1,
                        "scaleX": 1,
                        "angleAlignment": "Display",
                    }
                }
            })
        }),
        labelingInfo: [new LabelClass({
                symbol: new symbols_1.TextSymbol({
                    haloSize: 1,
                    color: "gray",
                    font: {
                        family: "Ubuntu Mono",
                        size: 8,
                        weight: "bold"
                    }
                }),
                labelPlacement: "above-right",
                labelExpressionInfo: {
                    expression: "$feature.unit_name"
                }
            })]
    });
    const map = new EsriMap({
        basemap: new Basemap({
            baseLayers: [states]
        }),
        layers: [csvLayer]
    });
    const view = new MapView({
        container: "viewDiv",
        map: map,
        extent: {
            spatialReference: {
                wkid: 102003
            },
            xmax: 2262921.752044893,
            xmin: -2684324.0809117956,
            ymax: 1598284.4176881902,
            ymin: -1426003.6710097145
        },
        constraints: {
            snapToZoom: false,
            minScale: 14295271
        },
        spatialReference: {
            wkid: 102003
        }
    });
    const infoDiv = document.getElementById("infoDiv");
    view.ui.add(infoDiv, "top-right");
    view.when(() => {
        animateNParks(view);
        filterStates(view);
    });
    function filterStates(view) {
        view.whenLayerView(states).then((layerView) => {
            watchUtils.whenFalseOnce(layerView, "updating", function () {
                layerView.filter = new FeatureFilter({
                    where: "(state_name <> 'Alaska') AND (state_name <> 'Hawaii')"
                });
            });
        });
    }
    const viewAlaska = new MapView({
        container: "viewAlaska",
        map: map,
        extent: {
            xmax: 3392243.978096625,
            xmin: 931650.966285601,
            ymax: 175872.17131386953,
            ymin: -2284720.8404971547,
            spatialReference: {
                wkid: 5936
            }
        },
        spatialReference: {
            // WGS_1984_EPSG_Alaska_Polar_Stereographic
            wkid: 5936
        },
        constraints: {
            snapToZoom: false,
            minScale: 30999535
        },
        ui: {
            components: []
        }
    });
    viewAlaska.when(function () {
        animateNParks(viewAlaska);
    });
    const viewHawaii = new MapView({
        container: "viewHawaii",
        map: map,
        extent: {
            xmin: -342537,
            ymin: 655453,
            xmax: 231447,
            ymax: 1023383,
            spatialReference: {
                wkid: 102007
            }
        },
        spatialReference: {
            // Hawaii_Albers_Equal_Area_Conic
            wkid: 102007
        },
        constraints: {
            snapToZoom: false,
            minScale: 30999535
        },
        ui: {
            components: []
        }
    });
    viewHawaii.when(function () {
        animateNParks(viewHawaii);
    });
    const timeSlider = new TimeSlider({
        container: "timeSlider",
        layout: "compact",
        mode: "cumulative-from-start",
        stops: {
            interval: new TimeInterval({
                value: 1,
                unit: "years"
            })
        },
        // view: view
        playRate: 300
    });
    view.ui.add(timeSlider, "bottom-right");
    function animateNParks(view) {
        view.whenLayerView(csvLayer).then((layerView) => {
            timeSlider.fullTimeExtent = new TimeExtent({
                start: new Date(1873, 11, 31),
                end: new Date(2017, 11, 31)
            });
            timeSlider.watch("timeExtent", function () {
                csvLayer.definitionExpression = "date_est <= " + timeSlider.timeExtent.end.getTime();
                console.log(timeSlider.timeExtent.start, timeSlider.timeExtent.end);
                var start = new Date(timeSlider.timeExtent.end.getTime());
                start.setMonth(0);
                start.setDate(1);
                layerView.effect = new FeatureEffect({
                    // excludedLabelsVisible: true,
                    filter: new FeatureFilter({
                        timeExtent: new TimeExtent({
                            start: start,
                            end: timeSlider.timeExtent.end
                        })
                    }),
                    excludedEffect: "grayscale(80%) blur(2px) opacity(0.3)",
                    includedEffect: "bloom(1.2, 2px, 0.2)"
                });
                console.log(start.toLocaleDateString(), timeSlider.timeExtent.end.toLocaleDateString());
                const query = layerView.effect.filter.createQuery();
                query.orderByFields = ["date_est"];
                let list = "";
                csvLayer.queryFeatures(query).then(function (results) {
                    // console.log(results.features.length);
                    if (results.features.length > 0) {
                        results.features.forEach(function (feature) {
                            console.log(feature.attributes.unit_name);
                            list = list + `<br/><a href="${feature.attributes.metadata}>${feature.attributes.unit_name}</a>`;
                        });
                        document.getElementById("parksDiv").innerHTML = list;
                    }
                });
            });
        });
    }
});
//# sourceMappingURL=main.js.map