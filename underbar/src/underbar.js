var _ = {};

(function() {
  // Call iterator(value, key, collection) for each element of collection
  _.each = function(obj, iterator) {
  	if(obj === null){
  		return;
  	}
  	else if(obj.length){
  		for(var i = 0; i < obj.length; i++){
  			iterator(obj[i], i, obj);
  		}
  	} else {
  		for(key in obj){
  			iterator(obj[key], key, obj);
  		}
  	}
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
  };


}).call(this);
