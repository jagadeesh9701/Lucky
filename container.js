const dependable = require('dependable');
const path =require('path')
const container = dependable.container();

const SimpleDependencies = [
	
	['_','lodash'],
	['mongoose','mongoose'],
	['moment','moment'],
	['async','async']
	];

	SimpleDependencies.forEach(function(val){

		container.register(val[0], function(){
		return require(val[1]);
		});

	});

	container.register('container',function(){
		return container;
	});