/*
* @Author: hoangphucvu
* @Date:   2016-10-21 14:27:37
* @Last Modified by:   hoangphucvu
* @Last Modified time: 2016-10-25 08:10:34
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