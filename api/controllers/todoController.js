'use strict';




exports.list_all_tasks = function(req, res) {
    const readability = require('readability-nodejs')

    let url=decodeURIComponent(req.params.url)
    var request = require('sync-request');
var resp = request('GET', url, {
  headers: {
    'user-agent': 'example-user-agent',
  },
});
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(resp.getBody('utf-8'));

let reader = new readability.Readability(dom.window.document);
let article = reader.parse();
    res.json({"data":article});
};


exports.list_nlp = function(req, res) {
    const readability = require('readability-nodejs')

    let url=decodeURIComponent(req.params.url)
    var request = require('sync-request');
var resp = request('GET', url, {
  headers: {
    'user-agent': 'example-user-agent',
  },
});
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(resp.getBody('utf-8'));

let reader = new readability.Readability(dom.window.document);
let article = reader.parse();
var vntk = require('vntk');
var tokenizer = vntk.wordTokenizer();
let wordarray=tokenizer.tag(article.textContent)
    res.json({"data":wordarray});
};

exports.create_a_task = function(req, res) {
    res.json({"trieu":"vu"});
};


exports.read_a_task = function(req, res) {
    res.json({"trieu":"vu"});
};


exports.update_a_task = function(req, res) {
    res.json({"trieu":"vu"});

}
exports.delete_a_task = function(req, res) {


    res.json({"trieu":"vu"})
};

