(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['test'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script id=\"handlebars-template\" type=\"text/x-handlebars-template\">\n    Handlebars <b>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"doesWhat") || (depth0 != null ? lookupProperty(depth0,"doesWhat") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"doesWhat","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":30}}}) : helper)))
    + "</b> precompiled!\n</script>";
},"useData":true});
})();