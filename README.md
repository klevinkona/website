# Angular UI Tree website source

## Development environment setup
#### Prerequisites

* [Node Package Manager](https://npmjs.org/) (NPM)
* [Git](http://git-scm.com/)

#### Dependencies

* [Grunt](http://gruntjs.com/) (task automation)
* [Bower](http://bower.io/) (package management)

#### Installation
Run the commands below in the project root directory.

#####1. Install Grunt and Bower

    $ sudo npm install -g grunt-cli bower

#####2. Install project dependencies

    $ npm install
    $ bower install

## Available commands

####Deploy website
Deploy the website by pushing the `app/` folder to the `gh-pages` branch.

This can be done using the Grunt task:

    $ grunt deploy
