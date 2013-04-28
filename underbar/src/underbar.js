var _ = {};

(function() {
  // Call iterator(value, key, collection) for each element of collection
  _.each = function(obj, iterator) {
  	if(!obj){
  		return;
  	}
  	else if(obj.length){
  		for(var i = 0; i < obj.length; i++){
  			iterator(obj[i], i, obj);
  		}
  	} else {
  		for(var key in obj){
  			if (obj.hasOwnProperty(key)){
  				iterator(obj[key], key, obj);
  			}
  		}
  	}
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
  	var breadcrumbs = {};
  	var rtrnArray = [];
  	_.each(array, function(item){
  		breadcrumbs[item] || rtrnArray.push(item);
  		breadcrumbs[item] = true;
  	});
  	return rtrnArray;
  };


}).call(this);
