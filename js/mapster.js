/*
* @Author: hoangphucvu
* @Date:   2016-10-21 14:27:37
* @Last Modified by:   hoangphucvu
* @Last Modified time: 2016-10-24 15:42:28
*/

(function(window,google){
	var Mapster = (function(){
		function Mapster(element,opts){
			this.gMap = new google.maps.Map(element,opts);
		}

		Mapster.prototype = {

		};
		return Mapster;
	}());

	Mapster.create = function(){
		return new Mapster();
	};

	window.Mapster = Mapster;
}(window,google));