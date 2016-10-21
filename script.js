/*
* @Author: hoangphucvu
* @Date:   2016-10-21 09:08:50
* @Last Modified by:   hoangphucvu
* @Last Modified time: 2016-10-21 09:16:49
*/

(function(window,google){
	//maps options
	var options={
		center:{
			lat:10.724400,
			lng:106.724547
		},
		zoom:10
	},
	element = document.getElementById('map');
	//map
	map = new google.maps.Map(element,options);
}(window,google));