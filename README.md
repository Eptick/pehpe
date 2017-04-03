# PeHPe

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Running Locally

```sh
$ git clone git@github.com:Eptick/pehpe.git
$ cd pehpe
$ npm install
$ bower install
$ ember server
```
Your app should now be running on [localhost:4200](http://localhost:4200/).

## Deploying to Heroku

```sh
$ heroku login
$ heroku create --buildpack https://codon-buildpacks.s3.amazonaws.com/buildpacks/heroku/emberjs.tgz
$ git push heroku master
$ heroku open
```