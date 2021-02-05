
var request = require('sync-request');
var resp = request('GET', 'https://hellobacsi.com/benh-tai-mui-hong/benh-ve-hong/cach-chua-viem-hong-hat-tai-nha/#gref', {
  headers: {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36',
  },
});
const readability = require('readability-nodejs')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(resp.getBody('utf-8'));
let reader = new readability.Readability(dom.window.document);
let article = reader.parse();
 console.log( {"data":article})