Meteor.startup(function() {
	AutoForm.addInputType('summernote', {
		template: 'afSummernote',
		valueOut: function() {
			return this.code();
		},
		contextAdjust: function(a) {
			console.log(a);
			return a;
		}
	});
});