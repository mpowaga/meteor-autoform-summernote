Package.describe({
  name: 'mpowaga:autoform-summernote',
  summary: 'Summernote editor for aldeed:autoform',
  version: '0.3.1',
  git: 'https://github.com/mpowaga/meteor-autoform-summernote'
});

Package.onUse(function(api) {
  var both = ['client', 'server'];

  api.versionsFrom('1.0');

  api.use([
    'templating',
    'aldeed:autoform@4.2.2'
  ], both);
  api.use('summernote:standalone@0.6.0_1', 'client');

  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js',
    'lib/client/autoform-summernote.js'  
  ], 'client');
});