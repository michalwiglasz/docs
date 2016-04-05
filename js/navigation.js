function orderNav() {
	var list,
		section,
		header,
		sections = [],
		lists = {},
		headers = {};

	var navUl = document.querySelectorAll('#navigation ul')[0],
		navLis = document.querySelectorAll('#navigation ul li');

	if (!navUl) return;

	for (var i = 0; i < navLis.length; i++) {
		var order, li = navLis[i];

		if (li.classList.contains('nav-header')) {
			section = li.textContent || li.innerText;
			sections.push(section);
			headers[section] = li;
			continue;
		}

		if (!lists[section]) {
			lists[section] = [];
		}

		order = parseFloat(li.getAttribute('data-order'))
		lists[section].push([order, li]);
	}

	for (var i = 0; i < sections.length; i++) {
		section = sections[i];
		list = lists[section].sort(function(a, b) {
			return a[0] - b[0];
		});

		if (header = headers[section]) {
			navUl.appendChild(header);
		}
		for (var j = 0; j < list.length; j++) {
			navUl.appendChild(list[j][1]);
		}
	}
}

if (document.querySelectorAll) orderNav();

function findPos(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return [curleft,curtop];
}

var nav = document.querySelectorAll('#navigation')[0];
var originalY = findPos(nav)[1] - 40;

window.onscroll = function(e) {
    // This value is your scroll distance from the top
    var distanceFromTop = document.body.scrollTop;
    // The user has scrolled to the tippy top of the page.
    // Set appropriate style.
    if (distanceFromTop >= originalY) {
        nav.className = 'sticky';
    } else {
        nav.className = '';
    }

};
