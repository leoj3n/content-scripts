# Content Scripts

A simple extension for Google Chrome that injects my styles on specific domains.

## Getting Started

### Mainfiles

See [manifest.json](app/manifest.json), [grunt](grunt), and [app/sites](app/sites).

### Loading

Load the extension into Google Chrome as an Unpacked Extension:

~~~
Navigate to chrome://extensions
Expand the developer dropdown menu and click "Load Unpacked Extension"
Navigate to local folder
~~~

### Developing

Checkout submodules with `git submodule update --init --recursive`

Install dependencies with `npm install`.

To compile a single change, run `grunt build`.

For a grunt watch task and livereload of current Chrome tab, run `grunt debug`.

### Prolonged development

Because I need to tweak these files at a moments notice, I use [hotel](https://github.com/typicode/hotel) to persist the watch task: 

`hotel add -n content-scripts "grunt debug"`

From this repo's directory.

