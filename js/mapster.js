/*
* @Author: hoangphucvu
* @Date:   2016-10-21 14:27:37
* @Last Modified by:   hoangphucvu
* @Last Modified time: 2016-10-25 10:20:51
*/
//library for easy access
(function(window,google){
	var Mapster = (function(){
		//constructor
		function Mapster(element,opts){
			this.gMap = new google.maps.Map(element,opts);
		}

		//represent for mapster properties
		Mapster.prototype = {
			zoom:function(level){
				if(level) {
					this.gMap.setZoom(level);
				}
				else {
					return this.gMap.getZoom();
				}
			},
			//using _ to make it private
			_on: function(opts){
				var self = this;
				google.maps.event.addListener(opts.obj,opts.event,function(event){
					//excute function
					opts.callback.call(self, event);
				});
			},
			addMarker: function(opts){
				var marker;
				opts.position = {
					lat:opts.lat,
					lng:opts.lng
				};
				//add lat & lng from opts obj to createMarker
				marker = this._createMarker(opts);
				if (opts.event) {
					this._on({
						obj:marker,
						event:opts.event.name,
						callback:opts.event.callback
					});
				}
			},
			_createMarker:function(opts){
				opts.map = this.gMap;
				return new google.maps.Marker(opts);
			}

		};
		return Mapster;
	}());

	//getter
	Mapster.create = function(element,opts){
		return new Mapster(element,opts);
	};

	window.Mapster = Mapster;
}(window,google));