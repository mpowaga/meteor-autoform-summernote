Template.afSummernote.onRendered(function() {
  var self = this;
  var options = {};
  if (this.data && this.data.atts) {
    options = this.data.atts.settings || {};
  } else {
    options = this.data;
  }
  var $editor = $(this.firstNode);
  this.$editor = $editor
  this.onblur = options.onblur;

  $editor.summernote(options);
 
  var value = null;
  this.autorun(function () {
    var dataContext = Template.currentData();
    if (value!=dataContext.value) {
      $editor.summernote('code', dataContext.value);
      value = dataContext.value;
    }
  });

  $editor.closest('form').on('reset', function() {
    $editor.summernote('code', '');
  });
});


Template.afSummernote.events({
  'summernote.blur': function(event, template) {
    // Unfortunatly there seems to be an issue where value is not updated in the
    // summernote code in some cases. We are just garenteeing that this is updated before 
    // triggering the autform change detection
    template.$(event.target)[0].value = template.$(event.target).summernote('code');
    template.$(event.target).change();

    var onblur = template.onblur;
    if (typeof onblur === 'function') {
      onblur.apply(this, arguments);
    }
  }
});

Template.afSummernote.onDestroyed(function() {
  if (this.$editor){ 
    this.$editor.summernote('destroy');
  }
});

Template.afSummernote.helpers({
  atts: function () {
    var self = this;

    return _.omit(this.atts, 'settings');
  }
});
