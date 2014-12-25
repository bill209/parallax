$(function(){
	skrollr.init();

	setSkrollr($('#box1'), [[0, 'width:100%'], [1500, 'width:0%']]);
	setSkrollr($('#box2'), [[0, 'transform:translateX(-100%)'], [750, 'transform:translateX(100%)'], [1500, 'transform:translateX(-100%)']]);

	skrollr.init({
		smoothScrolling: false
	});

});

// For a full explanation of this code, please refer to the blogpost at http://www.bram.us/2014/01/01/skrollr-css-animations-linked-to-scroll-position/

// setSkrollr function extracted from https://www.pingdom.com/2013/
var setSkrollr = function($el, data) {
	for (var i = 0, l = data.length; i < l; i++) {
		var d = data[i],
			px = d[0];
			css = d[1];
		$el.attr('data-' + px, css);
	}
}

jQuery(function($) {
	setSkrollr($('#box1'), [[0, 'width:100%'], [500, 'width:0%']]);
//	setSkrollr($('#box2'), [[0, 'transform:translateX(-100%)'], [250, 'transform:translateX(100%)'], [500, 'transform:translateX(-100%)']]);

      setSkrollr($('#box2'), [[0, 'margin-left: 0px'], [500, 'margin-left: 500px']]);

	skrollr.init({
		smoothScrolling: false
	});
});
