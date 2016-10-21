/*
* @Author: hoangphucvu
* @Date:   2016-10-21 09:08:50
* @Last Modified by:   hoangphucvu
* @Last Modified time: 2016-10-21 13:40:55
*/

(function(window,google,mapster){
	//maps options
	var options= mapster.MAP_OPTIONS,
	element = document.getElementById('map'),
	//map
	map = new google.maps.Map(element,options);
}(window,google,window.Mapster || (window.Mapster = {})));