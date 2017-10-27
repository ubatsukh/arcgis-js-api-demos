# Samples using the ArcGIS API for JavaScript

This repository contains samples using the ArcGIS API for JavaScript in its 3.x and 4.x versions.

You can explore the following samples here:

### Creating a custom tile layer with TypeScript

This sample was featured in [this blog post](https://blogs.esri.com/esri/arcgis/2017/10/27/creating-a-custom-tile-layer-with-typescript/) in a series featuring how to create a custom tile layer with TypeScript.

This sample demonstrates how to create a [custom tile layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-BaseTileLayer.html) by applying the [multiply](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
blending operation to the [ArcGIS World Hillshade](https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer)
and [National Geographic World Map](https://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer)
services. The `multiply` blend mode multiplies the values of each pixel of the top layer with the corresponding pixel value of the bottom layer. In this sample, multiplying the hillshade tiles with the National Geographic tiles creates a more detailed representation of the terrain than you see from the default National Geographic basemap.

[![blendlayer](https://blogs.esri.com/esri/arcgis/files/2017/10/blendlayer.png)](https://ubatsukh.github.io/blendlayer/)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/tree/master/blendlayer)

[View the live sample](https://ubatsukh.github.io/blendlayer/)
