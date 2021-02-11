# 2021 Dev Summit demos

### ArcGIS API for JavaScript: Client-side queries, filters and analysis (without a server)

<a name="client-side-featurelayer"/>

#### Demo 1. Client-side featurelayer - USGS Stream flow data

This app was used to demonstrate how to create client-side featurelayer from an array of client-side graphics. It also shows how to filter data from the client-side feature layer by on their attributes.

[![client-side-featurelayer](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2021/images/client-side-featurelayer.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2021/streamflow-usgs/)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/tree/master/devsummit2021/streamflow-usgs)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2021/streamflow-usgs/)

<a name="time-enabled-csv"/>

#### Demo 2. Time enabled CSVLayer

This app was used to demonstrate how to create a time enabled CSVLayer from a csv file downloaded from [this story map](http://storymaps.esri.com/stories/2016/nps-centennial/). This app applies `grayscale and blur` effects if the features do not meet the time filter and applies `bloom` effect if the features fall within the time extent filter. This is done by watching the `timeExtent` property on the TimeSlider widget. This app also queries the features that meet the time filter requirements. <br/>

[![csvlayer](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2021/images/time-enabled-csvlayer.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2021/csvLayer-nps/)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/tree/master/devsummit2021/csvLayer-nps)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2021/csvLayer-nps/)


### ArcGIS API for JavaScript: Data-driven animations

<a name="time-enabled-layer"/>

#### Demo 1. 48 hour smoke forecast

This app was used to demonstrate how to filter data based on a given time extent. In this app, we add a time-enabled feature service as a feature layer and take advantage of TimeSlider widget to visualize smoke forecast live feed data with one hour interval. This app showcases how the MapView can filter time-enabled data when the TimeSlider's view property is set.

[![smoke-forecast](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2021/images/wildfire-effect.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2021/effect-wildfires/)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/tree/master/devsummit2021/effect-wildfires)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2021/effect-wildfires/)

<a name="filter-by-date"/>

#### Demo 2. Kincaid fire perimeter change over time

This app was used to demonstrate how to filter data based on a date field. In this app, we add 2019 fire perimeters feature service as a feature layer. The service does not have timeInfo information published with it but has a date field that was updated whenever the fire perimeters were updated. We watch TimeSlider's timeExtent property to filter out the fire perimeters if they do not fall on a date where the timeslider thumb is. This is done by setting an attribute filter on the layer view that represent the fire perimeter layer. 

[![fire-perimeter](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2021/images/fire-perimeter.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2021/fire-perimeter/)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/tree/master/devsummit2021/fire-perimeter)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2021/fire-perimeter/)

### ArcGIS API for JavaScript: Photoshop-style Graphics Effects for Your Layers and Data

<a name="submarine-cables"/>

#### Demo 1. Submarine cables built since 1990 

This app was used to demonstrate how to layer blendMode and effects can be used to create visually appealing effects to your layers. This demo uses `luminosity`, `soft-light` and `hard-light` blend modes on layers to change the look and feel of the basemap. It also applies effects on the `bloom` effect on the submarine cables layer to have them pop on the map.

[![submarine-cables](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2021/images/submarine-cables.png)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2021/submarine-cables/)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/tree/master/devsummit2021/submarine-cables)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2021/submarine-cables/)




