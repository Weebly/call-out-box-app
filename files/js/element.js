/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function(){

	var CallOutBox = PlatformElement.extend({
		initialize: function() {
			// Remove inline styles
			this.$el.find('.element').each(function(index) {
			      $(this).attr('style', '');
			});
		}
	});
	
	return CallOutBox;
})();
