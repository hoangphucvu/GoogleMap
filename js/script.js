/*
* @Author: hoangphucvu
* @Date:   2016-10-21 09:08:50
* @Last Modified by:   hoangphucvu
* @Last Modified time: 2016-10-25 08:09:36
*/
//main script call map-option and mapster
(function(window,mapster){
	//maps options
	var options= mapster.MAP_OPTIONS,
	element = document.getElementById('map'),
	//map
	map = mapster.create(element,options);
	map.zoom(18);
}(window,window.Mapster || (window.Mapster = {})));