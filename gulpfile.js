/**
 * @author    Marco Turi
 * @copyright Copyright (c) 2016, Marco Turi
 * @license   GPL-3.0
 */
'use strict';

//  for compiling to es6
require('babel-register');
// require all tasks
require('require-dir')('./gulp/tasks', { recurse: true });
