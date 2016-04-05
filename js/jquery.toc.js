/*
 * jQuery Table of Content Generator for Markdown v1.0
 *
 * https://github.com/dafi/tocmd-generator
 * Examples and documentation at: https://github.com/dafi/tocmd-generator
 *
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2013 Davide Ficano
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($) {
	var tocContainerHTML = '<ul class="nav nav-list">%1</ul>';

	function createLevelHTML(anchorId, tocLevel, tocText) {
		if (tocLevel == 1) {
			return '<li class="nav-header">%1</li>'
				.replace('%1', tocText);
		} else {
			return '<li><a href="#%1">%2</a></li>'
				.replace('%1', anchorId)
				.replace('%2', tocText);
		}
	}

	$.fn.toc = function(settings) {
		var config = {
			renderIn: 'self',
			anchorPrefix: 'tocAnchor-',
			showAlways: false,
			minItemsToShowToc: 2,
			saveShowStatus: true,
			contentsText: 'Contents',
			hideText: 'hide',
			showText: 'show',
			showCollapsed: false};

		if (settings) {
			$.extend(config, settings);
		}

		var tocHTML = '';
		var tocLevel = 1;
		var tocSection = 1;
		var itemNumber = 1;

		var tocContainer = $(this);

		tocContainer.find('h1').each(function() {
			var h1 = $(this);
			tocHTML += createLevelHTML(
			    h1.attr('id'),	1,
			    h1.text()
			);
			h1.nextUntil('h1').filter('h2').each(function() {
				tocHTML += createLevelHTML(
				    $(this).attr('id'), 2,
				    $(this).text()
				);
			});
			// console.log(tocHTML);
		});

		// for convenience itemNumber starts from 1
		// so we decrement it to obtain the index count
		var tocIndexCount = itemNumber - 1;

		var show = config.showAlways ? true : config.minItemsToShowToc <= tocIndexCount;

		// check if cookie plugin is present otherwise doesn't try to save
		if (config.saveShowStatus && typeof($.cookie) == "undefined") {
			config.saveShowStatus = false;
		}

		if (show && tocHTML) {
			var replacedTocContainer = tocContainerHTML
				.replace('%1', tocHTML);

			// Renders in default or specificed path
			if (config.renderIn != 'self') {
			  $(config.renderIn).html(replacedTocContainer);
			} else {
			  tocContainer.prepend(replacedTocContainer);
			}
		}
		return this;
	}
})(jQuery);
