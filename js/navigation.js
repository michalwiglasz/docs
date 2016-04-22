console.log('asd');

function findPos(obj) {
    var curleft = curtop = 0;
    console.log('--------');
    if (obj.offsetParent) {
    	console.log(obj);
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    console.log([curleft,curtop]);
    return [curleft,curtop];
}

var nav = document.querySelectorAll('#navigation')[0];
var originalY = findPos(nav)[1] - 40;
console.log(originalY);


window.onscroll = function(e) {
    // This value is your scroll distance from the top
    var distanceFromTop = document.body.scrollTop;
    console.log(distanceFromTop);
	// The user has scrolled to the tippy top of the page.
    // Set appropriate style.
    if (distanceFromTop >= originalY) {
        nav.className = 'sticky';
    } else {
        nav.className = '';
    }

};
