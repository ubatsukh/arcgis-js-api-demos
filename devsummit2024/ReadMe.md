# 2024 Dev Summit demos

### ArcGIS Maps SDK for JavaScript: Animating Your Data​

#### Demo 1. Client-side StreamLayer

This app was used to demonstrate how to create and add a [client-side StreamLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-StreamLayer.html#clientside-streamlayer) to thr 2D MapView. Client-side stream layers are a good replacement for client-side feature layers that are updated very frequently via `applyEdits()` method. 5000 random point features to the stream layer and their geometries are updated every 100 milliseconds.

[![client-side-streamlayer](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/images/client-side-streamlayer.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/clientside-streamlayer.html)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/clientside-streamlayer.html)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/clientside-streamlayer.html)

#### Demo 2. Layer versus LayerView - historical hurricanes data

This app was used to demonstrate differences between layer and its layer view. Historical hurricanes csv file is added as a CSVLayer. The app calls [CSVLayer.queryFeatures()] and [CSVLayerView.queryFeatures()] methods. Then displays feature count and the spatial reference of the features returned from the layer and layer view query features results.

[![layer-layerview](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/images/layer-vs-layerview.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/layer-vs-layerview.html)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/layer-vs-layerview.html)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/layer-vs-layerview.html)

#### Demo 3. Filter features based on geometry -  Filter New York restaurants by a geometry

This app was used to demonstrate how to filter New York restaurants within 0.5 or 1 km/mile of a moving car along a designated route. The restaurants are filtered by setting the feature layer view's [featureEffect.filter.geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html) property along with `featureEffect.filter.distance` and `featureEffect.filter.units` parameters.

[![geometry-filter](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/images/nyc-restaraunts-filter.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/filter-restaurants.html)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/filter-restaurants.html)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/filter-restaurants.html)

#### Demo 4. Filter features based on attributes -  LA AirBnB listings

This app was used to demonstrate how to filter Los Angeles AirBnB listings based on room types and host names. This app also filters the data on the map as user moves the pointer over the room types and host names charts. The filtering of the data is done directly on the client-side by querying features from the layerView.

[![attributes-filter](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/images/la-airbnb-listings.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/la-airbnb-listings.html)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/la-airbnb-listings.html)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/la-airbnb-listings.html)

### ArcGIS Maps SDK for JavaScript: Animating Your Data​

#### Demo 2. Filter features based on geometry -  Filter New York restaurants by a geometry

This app was used to demonstrate how to filter New York restaurants within 0.5 or 1 km/mile of a moving car along a designated route. The restaurants are filtered by setting the feature layer view's [featureEffect.filter.geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html) property along with `featureEffect.filter.distance` and `featureEffect.filter.units` parameters.

[![geometry-filter](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/images/nyc-restaraunts-filter.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/filter-restaurants.html)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/filter-restaurants.html)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/filter-restaurants.html)

### ArcGIS Maps SDK for JavaScript: Animating Your Data​

#### Demo 1. Filter data based on attributes - Beverly Hills Trees

This app was used to demonstrate how to filter data on the client-side by setting the feature layer view's [featureEffect.filter.where](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html) property.

This application loads Beverly Hills trees data to the map and the top five common species are queried when the layer is loaded. The top five tree species are listed on the right hand side of the app. Users can move the pointer over the list or click the tree to highlight the tree type on the map. The application set the filter's [where](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#where) property and then the [featureEffect](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-FeatureLayerView.html#featureEffect) is applied to layer view.

[![attribute-filter](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/images/beverly-hills-trees.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/beverly-hills-trees.html)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/beverly-hills-trees.html)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/beverly-hills-trees.html)

#### Demo 2. Filter features based on geometry -  Filter New York restaurants by a geometry

This app was used to demonstrate how to filter New York restaurants within 0.5 or 1 km/mile of a moving car along a designated route. The restaurants are filtered by setting the feature layer view's [featureEffect.filter.geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html) property along with `featureEffect.filter.distance` and `featureEffect.filter.units` parameters.

[![geometry-filter](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/images/nyc-restaraunts-filter.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/filter-restaurants.html)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/filter-restaurants.html)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/filter-restaurants.html)

#### Demo 3. Animate time enabled service - 48 hour smoke forecast

This app was used to demonstrate how to filter data based on a given time extent. In this app, we add a time-enabled feature service as a feature layer and take advantage of TimeSlider widget to visualize smoke forecast live feed data with one hour interval. This app showcases how the MapView can filter time-enabled data when the TimeSlider's view property is set.

[![smoke-forecast](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/images/wildfires-effect.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/wildfires-featureeffect.html)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/wildfires-featureeffect.html)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/wildfires-featureeffect.html)

#### Demo 4. Animate time enabled CSVLayer - National Parks

This app was used to demonstrate how to create a time enabled CSVLayer from a csv file downloaded from [this story map](http://storymaps.esri.com/stories/2016/nps-centennial/). The [timeInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-CSVLayer.html#timeInfo) property is set in the CSVLayer's constructor. Then we can animate through time to see when national parks were established. This is done with the use of [TimeSlider](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-TimeSlider.html) widget.

[![csvlayer](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/images/csv-national-parks.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/csvlayer-timeextent.html)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/csvlayer-timeextent.html)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/csvlayer-timeextent.html)

#### Demo 5. Kincade fire perimeter change over time

This app was used to demonstrate how to filter data based on a date field. In this app, we add 2019 fire perimeters feature service as a feature layer. The service does not have timeInfo information published with it but has a date field that was updated whenever the fire perimeters were updated. We watch TimeSlider's timeExtent property to filter out the fire perimeters if they do not fall on a date where the timeslider thumb is. This is done by setting an attribute filter on the layer view that represent the fire perimeter layer.

[![fire-perimeter](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/images/kincade-fire.gif)](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/kincade-fire-perimeters.html)

[View the code](https://github.com/ubatsukh/arcgis-js-api-demos/blob/master/devsummit2024/kincade-fire-perimeters.html)

[View the live sample](https://ubatsukh.github.io/arcgis-js-api-demos/devsummit2024/kincade-fire-perimeters.html)
