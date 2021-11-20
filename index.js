/*
Copyright 2020 apHarmony

This file is part of jsHarmony.

jsHarmony is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

jsHarmony is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this package.  If not, see <http://www.gnu.org/licenses/>.
*/

var excelJS = null;
var pdfMerge = null;
var puppeteer = null;

exports = module.exports = {};

exports.type = 'jsharmony-report';

exports.init = function(callback){
  return callback();
}

exports.excelJS = function(){
  if(!excelJS) excelJS = require('exceljs');
  return excelJS;
}

exports.pdfMerge = function(){
  if(!pdfMerge) pdfMerge = require('pdf-merge');
  return pdfMerge;
}

exports.puppeteer = function(){
  if(!puppeteer) puppeteer = require('puppeteer');
  return puppeteer;
}

exports.getExcelJS = function(cb){
  return cb(null, exports.excelJS());
}

exports.getPdfMerge = function(cb){
  return cb(null, exports.pdfMerge());
}

exports.getPuppeteer = function(cb){
  return cb(null, exports.puppeteer());
}