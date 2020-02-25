// The `///amd-dependency ...` allows us to import AMD modules and provide a name
// for them in the compiled JS. TypeScript relies on some helpers for building
// classes. JS API disabled the option for TypeScript to automatically generate these
// for us. So we import them as we create a class, mainly `__extends` and `__decorate`.
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import Deferred = require("dojo/Deferred");
import { subclass, property, declared } from "esri/core/accessorSupport/decorators";

import TileLayer = require("esri/layers/TileLayer");
import BaseTileLayer = require("esri/layers/BaseTileLayer");

@subclass("esri.layers.BlendLayer")
class BlendLayer extends declared(BaseTileLayer) {

  // Derived classes that contain constructor functions must call
  // super() which will execute the constructor function on the base 
  // class.

  // If you have a constructor in your class then you must call
  // the parent constructor from your constructor.
  // This ensures that the stuff that it needs to set on this gets set.
  // Followed by the call to super you can add any additional stuff you want
  // to do in your constructor.
  constructor(options: any) {
    super();
  }

  @property()
  multiplyLayers: TileLayer[] = [];

  load(): any {
    // call load method on each tile layer stored in multiple property
    this.multiplyLayers.forEach(function (layer) {
      // The tile layers must load() prior to the BlendLayer
      // resolving and moving to the "loaded" status.
      this.addResolvingPromise(layer.load());
    }, this);
  }

  // Fetches the tile(s) visible in the view
  fetchTile(level: number, row: number, col: number): IPromise<HTMLCanvasElement> {

    const tilePromises = this.multiplyLayers.map(layer => {
      // calls fetchTile() on the tile layers returned in multiplyLayers property
      // for the tiles visible in the view
      return layer.fetchTile(level, row, col, { allowImageDataAccess: true });
    });

    return all(tilePromises)
      .then(images => {
        // create a canvas
        let width = this.tileInfo.size[0];
        let height = this.tileInfo.size[0];
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        // multiply - multiplies the numbers for each pixel of the top layer (nat geo)
        // with the corresponding pixel for the bottom layer (hillshade).
        context.globalCompositeOperation = "multiply";
        images.forEach(function (image) {
          context.drawImage(image, 0, 0, width, height);
        });

        return canvas;
      });
  }
}

export = BlendLayer;

/***************************************/
/* End of the BlendLayer code          */
/***************************************/

// https://searchcode.com/codesearch/view/50023473/
// This function takes multiple promises and returns 
// a new promise that is fulfilled when all promises have 
// been resolved or one has been rejected.
function all<T>(promises: IPromise<T>[]): IPromise<T[]> {
  const dfd = new Deferred();
  const results: T[] = [];

  promises = promises.slice();
  let waiting = promises.length;
  promises.forEach(promise => {
    promise.then(result => {
      const index = promises.indexOf(promise);
      results[index] = result;
      promises.slice(index, 1);

      if (!promises || !promises.length) {
        dfd.resolve(results);
      }
      if (!dfd.isFulfilled()) {
        results[index] = result;
        if (--waiting === 0) {
          dfd.resolve(results);
        }
      }
      else{
        dfd.reject();
      }
    });
  });

  return dfd.promise as any;
}