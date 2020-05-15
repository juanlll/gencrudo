'use strict';

const ModelGenerator = require('./src/API-LARAVEL/Generators/ModelGenerator');

let modelGenerator = new ModelGenerator('API-LARAVEL', 'dd', 'ds');

modelGenerator.generate()