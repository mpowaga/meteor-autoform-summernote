Template.afSummernote.rendered = function() {
	var options = {};
	var keys = ['height', 'minHeight', 'maxHeight', 'focus', 'toolbar', 'airPopover'];

	for (var key in keys) {
		if (typeof this.data.atts[keys[key]] != 'undefined') {
			options[keys[key]] = this.data.atts[keys[key]];
		}
	}

	options.onblur = function(e) {
		this.$('.summernote').change();
	}.bind(this);

	this.$('.summernote').summernote(options);
};

Template.afSummernote.helpers({
	dataSchemaKey: function() {
		return this.atts['data-schema-key'];
	}
});