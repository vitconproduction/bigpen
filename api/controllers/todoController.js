'use strict';


var File = require('../models/todoModel.js');
exports.gethtml_tasks = function(req, res) {
    const path = require('path');
    res.sendFile(path.join(__dirname).replace('api/controllers','public')+"/"+req.params.url+'.html');//__dirname+
}

exports.savehtml_tasks = function(req, res) {
    var file = new File(req.body);
    let bodyhtml=file.body_html;
    let name=file.filename;
   // console.log(JSON.stringify(req.body ))
    var fs = require('fs');
    fs.writeFile("public/"+name+".html", bodyhtml, 'utf8', function (err) {
        res.json({"data":true});
    }
    )
}
exports.list_all_tasks = function(req, res) {
    const readability = require('readability-nodejs')

    let url=decodeURIComponent(req.params.url)
    var request = require('sync-request');
var resp = request('GET', url, {
  headers: {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36',
  },
});
res.send(resp.getBody('utf-8'))
/*
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(resp.getBody('utf-8'));
let reader = new readability.Readability(dom.window.document);
let article = reader.parse();
    res.json({"data":article});
    */
};

exports.list_nlp = function(req, res) {
    try {
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
let vntk = require('vntk');
let ner = vntk.ner();
let wordarray=[]

let tagarray=ner.tag(article.textContent)
for(let i=0;i<tagarray.length;i++) {
    let lengtharr=tagarray[i].length
    if(tagarray[i][0].split(' ').length>1 || tagarray[i][lengtharr-1]!="O" )
    {
        wordarray.push(tagarray[i][0])
    }
}
    
} catch (error) {
    console.error(error);
    res.json({"data":[]});
  }
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