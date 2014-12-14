Template.afSummernote.rendered = function() {
	var options = this.data.atts;
	
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