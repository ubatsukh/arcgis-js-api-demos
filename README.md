# Samples using the ArcGIS API for JavaScript

This repository contains samples using the ArcGIS API for JavaScript in its 3.x and 4.x versions.

You can explore the following samples here:

### 1. Creating a custom tile layer with TypeScript

This sample was featured in [this blog post](https://blogs.esri.com/esri/arcgis/2017/10/27/creating-a-custom-tile-layer-with-typescript/) in a series featuring how to create a custom tile layer with TypeScript.

This sample demonstrates how to create a [custom tile layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-BaseTileLayer.html) by applying the [multiply](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
blending operation to the [ArcGIS World Hillshade](https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer)
and [National Geographic World Map](https://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer)
services. The `multiply` blend mode multiplies the values of each pixel of the top layer with the corresponding pixel value of the bottom layer. In this sample, multiplying the hillshade tiles with the National Geographic tiles creates a more detailed representation of the terrain than you see from the default National Geographic basemap.

[![blendlayer](https://blogs.esri.com/esri/arcgis/files/2017/10/blendlayer.png)](https://ubatsukh.github.io/blendlayer/)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/tree/master/blendlayer)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/blendlayer/)

### 2. Client-side projection versus GeometryService projection

This sample was featured in [this blog post](https://blogs.esri.com/esri/arcgis/2017/10/27/creating-a-custom-tile-layer-with-typescript/) introducing the client-side projection engine.

This sample demonstrates how to use the client-side projection engine in JavaScript application. It also compares the performance of client-side projection versus the geometryserver projection.

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/tree/master/pe-gs-projection)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/pe-gs-projection/)

### 3. Setting custom ticks and labels for TimeSlider

This sample shows to how set custom ticks and labels for the [TimeSlider](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-TimeSlider.html) widget by setting its [tickConfigs](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-TimeSlider.html#tickConfigs) property. The `tickConfigs` was added at version 4.16 and opens up endless possibilities to style and set custom ticks and labels for your TimeSlider.

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/tree/master/timeSlider-tickConfigs)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/timeSlider-tickConfigs/)

### 4. Dev summit 2021 demos

#### 4.a Current wildfires and smoke forecast

The following sample shows how bloom and blur effects are used to create fire maps.

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/tree/master/effect-wildfires)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/effect-wildfires/)



#### 4.b CSVLayer Demo

The following sample shows how to create and add a time-aware CSVLayer to the map. It also shows how to use TimeSlider widget to animate through temporal data.

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/tree/master/devsummit2021/csvLayer-nps)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2021/csvLayer-nps/)
