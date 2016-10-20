CRUD tutorial with Node.js Express and MySql
============================================

This tutorial demonstrates CRUD with Node.js Express framework and MySql. For 
Node.js istallation please check official [instructions](https://nodejs.org/en/download/package-manager/).

After Node.js is succesfully installed we can proceed.

Hello world
-----------
We will connect to database via simple REST api. First we need to create directory for our project.
Since we'll be building rest api first, we'll create directory for our api code as well.

		$ mkdir crude_tutorial/api

Position in api dir and init this directory as new node project directory with following command.

		$ npm init

The npm (Node Package Manager) wil ask you to provide some information about your new project. This
data will be stored in *package.json* file that npm will create in project root dir.

Your newly created *package.json* file should now look something like this:

		{
			"name": "crud_demo",
			"version": "0.0.1",
			"description": "Rest API demo application",
			"main": "server.js",
			"author": "Luka Miljak",
			"license": "ISC"
		}

We'll be using Express Node.js framework for our api. You can install this module by running following
command frow within api dir.

	$ npm install --save express

The `--save` flag will update your *package.json* while new node module will be installed in *node_modules*
directory.

Now to write some code. Create *server.js* file with following code.

		var app = require('express')()

		app.get('/', (req, res) => { res.send('Hello World!'); });

		var server = app.listen(3000, () => {
			var host = server.address().address;
			host = (host === '::') ? 'localhost' : host;
			var port = server.address().port;

			console.log('listening at http://%s:%s', host, port);
		});

And that's all for this step! To start Node.js server simply run it with

		$ node server.js

To read "Hello World!" message simply point your browser to `localhost:3000`.



