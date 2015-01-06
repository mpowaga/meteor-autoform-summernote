Template.afSummernote.rendered = function() {
	var options = this.data.atts;
	var $self = this.$('.summernote');
	
	options.onblur = function(e) {
		$self.change();
	};

	$self.summernote(options);

	$self.closest('form').on('reset', function() {
		$self.code('');
	});
};

Template.afSummernote.helpers({
	dataSchemaKey: function() {
		return this.atts['data-schema-key'];
	}
});