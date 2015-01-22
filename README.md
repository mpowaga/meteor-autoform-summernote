Summernote for AutoForm
=======================

Add WYSIWYG editor to your Meteor app.

###Usage###

1) Install `meteor add mpowaga:autoform-summernote`

2) Install bootstrap and fontawesome or skip this if you have them installed

`meteor add twbs:bootstrap`

`meteor add fortawesome:fontawesome`

3) Create schema

```
var BookSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Yet another poem",
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor' // optional
        // summernote options goes here
      }
    }
  }
});
```

4) Attach schema to your collection `Books.attachSchema(BookSchema)`

5) Generate the form with `{{> quickform}}` or `{{#autoform}}`

```
{{> quickForm collection="Books" type="insert"}}
```

###Summernote options###

See all available summernote options [here](http://summernote.org/#/features#api).

###Summernote callbacks###

See all available summernote calbacks [here](http://summernote.org/#/features#callbacks).
