(function(global, factory){
	//... 

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		module.exports = factory( global, true ) or factory( w );

	} else {
		factory( global );
	}

})(window or this, function(
		// 真正的 jQuery code
	));


/////////////////////////////////////

jQuery = function(selector, context){
	return new jQuery.fn.init(selector, context);
}