/*
* @Author: hoangphucvu
* @Date:   2016-10-21 14:27:37
* @Last Modified by:   hoangphucvu
* @Last Modified time: 2016-10-25 09:27:43
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
			_on: function(event,callback){
				var self = this;
				google.maps.event.addListener(this.gMap,event,function(event){
					//excute function
					callback.call(self, event);
				});
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