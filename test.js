var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://www.adidas.fi/api/pages/landing?path=/";
var util = require("util");
const addContext = require('mochawesome/addContext');

function rp(opts) {
    return new Promise(function (success, reject) {
        request.get(opts, function(error, response, body) {
            if (error)
                reject(error);
            else
                success({response, body});
        });
    });
}

describe('returns Image', function() {
    it('returns Image', function() {
        this.timeout(2000);
        return rp({ url: baseUrl }).then(
        function({response, body}) {
            expect(response.statusCode).to.equal(200);
            var bodyObj = JSON.parse(body);
            return Promise.all(bodyObj.component_presentations.map(function (component_presentation) {
                    return Promise.all((component_presentation.component.content_fields || {items: []}).items.map(function (item) {
                    var url = item.background_media ;
                    console.log("item", url )
                    expect(url).to.be.not.empty;
                    return rp({ url: url }).then(
                        function({response, body}) {
                            console.log("request", error)
                            expect(response.statusCode).to.equal(200);
                        }
                    );
                }));
            }));
        });
    })    
});




















