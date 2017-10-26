// The `///amd-dependency ...` allows us to import AMD modules and provide a name
// for them in the compiled JS. TypeScript relies on some helpers for building
// classes. JS API disabled the option for TypeScript to automatically generate these
// for us. So we import them as we create a class, mainly `__extends` and `__decorate`.
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "dojo/Deferred", "esri/core/accessorSupport/decorators", "esri/layers/BaseTileLayer"], function (require, exports, __extends, __decorate, Deferred, decorators_1, BaseTileLayer) {
    "use strict";
    var BlendLayer = (function (_super) {
        __extends(BlendLayer, _super);
        // Derived classes that contain constructor functions must call
        // super() which will execute the constructor function on the base 
        // class.
        // If you have a constructor in your class then you must call
        // the parent constructor from your constructor.
        // This ensures that the stuff that it needs to set on this gets set.
        // Followed by the call to super you can add any additional stuff you want
        // to do in your constructor.
        function BlendLayer(options) {
            var _this = _super.call(this) || this;
            _this.multiplyLayers = [];
            return _this;
        }
        BlendLayer.prototype.load = function () {
            // call load method on each tile layer stored in multiple property
            this.multiplyLayers.forEach(function (layer) {
                // The tile layers must load() prior to the BlendLayer
                // resolving and moving to the "loaded" status.
                this.addResolvingPromise(layer.load());
            }, this);
        };
        // Fetches the tile(s) visible in the view
        BlendLayer.prototype.fetchTile = function (level, row, col) {
            var _this = this;
            var tilePromises = this.multiplyLayers.map(function (layer) {
                // calls fetchTile() on the tile layers returned in multiplyLayers property
                // for the tiles visible in the view
                return layer.fetchTile(level, row, col, { allowImageDataAccess: true });
            });
            return all(tilePromises)
                .then(function (images) {
                // create a canvas
                var width = _this.tileInfo.size[0];
                var height = _this.tileInfo.size[0];
                var canvas = document.createElement("canvas");
                var context = canvas.getContext("2d");
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
        };
        __decorate([
            decorators_1.property()
        ], BlendLayer.prototype, "multiplyLayers", void 0);
        BlendLayer = __decorate([
            decorators_1.subclass("esri.layers.BlendLayer")
        ], BlendLayer);
        return BlendLayer;
    }(decorators_1.declared(BaseTileLayer)));
    /***************************************/
    /* End of the BlendLayer code          */
    /***************************************/
    // https://searchcode.com/codesearch/view/50023473/
    // This function takes multiple promises and returns 
    // a new promise that is fulfilled when all promises have 
    // been resolved or one has been rejected.
    function all(promises) {
        var dfd = new Deferred();
        var results = [];
        promises = promises.slice();
        var waiting = promises.length;
        promises.forEach(function (promise) {
            promise.then(function (result) {
                var index = promises.indexOf(promise);
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
                else {
                    dfd.reject();
                }
            });
        });
        return dfd.promise;
    }
    return BlendLayer;
});
//# sourceMappingURL=BlendLayer.js.map