/*
* @Author: hoangphucvu
* @Date:   2016-10-21 13:32:12
* @Last Modified by:   hoangphucvu
* @Last Modified time: 2016-10-21 13:46:49
*/

(function(window, google, mapster){
	mapster.MAP_OPTIONS = {
		center:{
			lat:10.724400,
			lng:106.724547
		},
		zoom:10,
		disableDefaultUI:false,
		scrollwheel:false,
		draggable:true,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
	};
}(window, google, window.Mapster || (window.Mapster = {})));