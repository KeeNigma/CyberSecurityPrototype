define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__header "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":54}}}))
    + "__header\" id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":68},"end":{"line":5,"column":75}}}) : helper)))
    + "-header\">\n  <div class=\"component__header-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":62}}}))
    + "__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "\n    "
    + alias3(((helper = (helper = lookupProperty(helpers,"component_description") || (depth0 != null ? lookupProperty(depth0,"component_description") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":29}}}) : helper)))
    + "\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),(depth0 != null ? lookupProperty(depth0,"mobileInstruction") : depth0),{"name":"any","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":30,"column":12}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__title "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":9,"column":33},"end":{"line":9,"column":57}}}))
    + "__title\">\n      <div class=\"component__title-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":10,"column":41},"end":{"line":10,"column":65}}}))
    + "__title-inner js-heading\"></div>\n    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__body "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":17,"column":32},"end":{"line":17,"column":56}}}))
    + "__body\">\n      <div class=\"component__body-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":18,"column":40},"end":{"line":18,"column":64}}}))
    + "__body-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":19,"column":26}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__instruction "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":25,"column":39},"end":{"line":25,"column":63}}}))
    + "__instruction\">\n      <div class=\"component__instruction-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":26,"column":47},"end":{"line":26,"column":71}}}))
    + "__instruction-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":33}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"component_description") || (depth0 != null ? lookupProperty(depth0,"component_description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":35,"column":0},"end":{"line":35,"column":25}}}) : helper)))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":36,"column":8}}})) != null ? stack1 : "");
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"article__header\">\n    <div class=\"article__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"article__title\">\n        <div class=\"article__title-inner js-heading\"></div>\n      </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__body\">\n        <div class=\"article__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__instruction\">\n        <div class=\"article__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"article__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":34,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"block__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"block__header\">\n    <div class=\"block__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"block__title\">\n        <div class=\"block__title-inner js-heading\"></div>\n      </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__body\">\n        <div class=\"block__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__instruction\">\n        <div class=\"block__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"block__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":34,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"component__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"js-answer-live-region aria-label\" aria-live=\"assertive\" aria-atomic=\"true\"></div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":15,"column":110},"end":{"line":15,"column":271}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredCorrectly")), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredIncorrectly")), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn__display js-display-attempts\">\n  <div class=\"btn__display-inner js-insert-attempts-string\" aria-live=\"assertive\">\n  </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"btn__response-container\">\n\n  <div class=\"btn__marking js-btn-marking u-display-none\">\n    <div class=\"icon\" aria-hidden=\"true\"></div>\n  </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_canShowModelAnswer") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\n  <button class=\"btn-text btn__action js-btn-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\">\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n  \n  <span class=\"js-btn-marking-label aria-label u-display-none\">"
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),(depth0 != null ? lookupProperty(depth0,"_canShowMarking") : depth0),{"name":"all","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":63},"end":{"line":15,"column":279}}})) != null ? stack1 : "")
    + "</span>\n\n  <button class=\"btn-text btn__feedback js-btn-feedback is-disabled\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\" aria-disabled=\"true\">\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n\n</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldDisplayAttempts") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__inner\">\n\n  <span id=\"drawer-heading\" class=\"aria-label\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"drawer") : stack1), depth0))
    + "</span>\n\n  <div class=\"drawer__toolbar u-clearfix\">\n\n    <div class=\"drawer__back\">\n      <button class=\"btn-icon drawer__btn drawer__back-btn js-drawer-back-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n        <span class=\"icon\"></span>\n      </button>\n    </div>\n\n    <div class=\"drawer__close\">\n      <button class=\"btn-icon drawer__btn drawer__close-btn js-drawer-close-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closeDrawer") : stack1), depth0))
    + "\">\n        <span class=\"icon\"></span>\n      </button>\n    </div>\n\n  </div>\n\n  <div class=\"drawer__holder js-drawer-holder\"></div>\n\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":23,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"className") || (depth0 != null ? lookupProperty(depth0,"className") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":81}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"drawer__menu-title drawer__item-title\">\n      <span class=\"drawer__menu-title-inner drawer__item-title-inner\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n      </span>\n    </span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"drawer__menu-body drawer__item-body\">\n      <span class=\"drawer__menu-body-inner drawer__item-body-inner\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n      </span>\n    </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__menu-inner drawer__item-inner\">\n  <button class=\"drawer__menu-btn drawer__item-btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"className") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":88}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "\n  </button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["heading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":11,"column":4}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0))
    + ".&nbsp;\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"incomplete") : stack1), depth0))
    + ".&nbsp;\n    ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":28}}})) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":9},"end":{"line":3,"column":16}}}) : helper)))
    + "-heading\" class=\"js-heading-inner\" role=\"heading\" aria-level=\""
    + alias4((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":3,"column":78},"end":{"line":3,"column":118}}}))
    + "\">\n  <span class=\"aria-label\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isA11yCompletionDescriptionEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":13,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isBackwardCompatible") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":16,"column":9}}})) != null ? stack1 : "")
    + "  </span>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isBackwardCompatible") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":20,"column":13}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading js-loading\">\n  <div class=\"loading__inner\">\n    <div class=\"loading__logo\"></div>\n    <div class=\"course__loading-alt\"></div>\n    <div class=\"course__title\">\n      <h2></h2>\n    </div>\n    <div class=\"course__sub-title\">\n      <h5></h5>\n      <div id='course__title-sub-title' aria-level='5' aria-role='heading'></div>\n    </div>\n    <div class=\"loading__image\">\n      <h3>Loading...</h3>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"btn-text nav__btn nav__skip-btn\" data-event=\"skipNavigation\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"skipNavigation") : stack1), depth0))
    + "\" data-order=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_navigation") : stack1)) != null ? lookupProperty(stack1,"_skipButton") : stack1)) != null ? lookupProperty(stack1,"_navOrder") : stack1), depth0))
    + "\">\n    "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"skipNavigationText") : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"nav__spacer\" aria-hidden=\"true\" data-order=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_navOrder") || (depth0 != null ? lookupProperty(depth0,"_navOrder") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_navOrder","hash":{},"data":data,"loc":{"start":{"line":18,"column":60},"end":{"line":18,"column":73}}}) : helper)))
    + "\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"nav__inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_accessibility") : depth0)) != null ? lookupProperty(stack1,"_isSkipNavigationEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + "\n  <button class=\"btn-icon nav__btn nav__back-btn js-nav-back-btn u-display-none\" data-event=\"backButton\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\" role=\"link\" data-order=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_navigation") : stack1)) != null ? lookupProperty(stack1,"_backButton") : stack1)) != null ? lookupProperty(stack1,"_navOrder") : stack1), depth0))
    + "\">\n    <span class=\"icon\"></span>\n  </button>\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_navigation") : stack1)) != null ? lookupProperty(stack1,"_spacers") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "\n  <button class=\"btn-icon nav__btn nav__drawer-btn js-nav-drawer-btn is-position-"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_config") : depth0)) != null ? lookupProperty(stack1,"_drawer") : stack1)) != null ? lookupProperty(stack1,"_position") : stack1), depth0))
    + "\" data-event=\"toggleDrawer\" aria-expanded=\"false\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"navigationDrawer") : stack1), depth0))
    + "\" data-order=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_drawer") : stack1)) != null ? lookupProperty(stack1,"_navOrder") : stack1), depth0))
    + "\">\n    <span class=\"icon\"></span>\n  </button>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notify__container-inner\">\n  <div class=\"notify__popup-container\"></div>\n  <div class=\"notify__push-container a11y-ignore\" aria-live=\"assertive\" aria-atomic=\"true\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":4,"column":26},"end":{"line":4,"column":34}}}) : helper)))
    + "=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":122},"end":{"line":4,"column":134}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return " has-image";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " align-image-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_imageAlignment") || (depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_imageAlignment","hash":{},"data":data,"loc":{"start":{"line":4,"column":215},"end":{"line":4,"column":234}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__icon\">\n          <div class=\"icon"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":26},"end":{"line":12,"column":73}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":73},"end":{"line":12,"column":118}}})) != null ? stack1 : "")
    + "\"></div>\n        </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " is-prompt";
},"12":function(container,depth0,helpers,partials,data) {
    return " is-alert";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__title\" id=\"notify-heading\">\n          <div class=\"notify__title-inner\" role=\"heading\" aria-level=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),"notify",(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":18,"column":70},"end":{"line":18,"column":113}}}))
    + "\">\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":31}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"altTitle") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":28,"column":8}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"notify__title aria-label\" id=\"notify-heading\">\n            <div class=\"notify__title-inner\" role=\"heading\" aria-level=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),"notify",(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":24,"column":72},"end":{"line":24,"column":115}}}))
    + "\">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"altTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":25,"column":14},"end":{"line":25,"column":36}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n        ";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0),"left",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":34,"column":19},"end":{"line":34,"column":50}}}),(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0),"top",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":34,"column":51},"end":{"line":34,"column":81}}}),{"name":"any","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":45,"column":22}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"notify__image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":47},"end":{"line":35,"column":98}}})) != null ? stack1 : "")
    + "\">\n              <img class=\"notify__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":36,"column":65},"end":{"line":36,"column":149}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":14},"end":{"line":43,"column":21}}})) != null ? stack1 : "")
    + "            </div>";
},"21":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0)) != null ? stack1 : "")
    + "\"";
},"25":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"notify__attribution\">\n                <div class=\"notify__attribution-inner\">\n                  "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\n                </div>\n              </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"notify__body\">\n              <div class=\"notify__body-inner\">\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":51,"column":16},"end":{"line":51,"column":34}}})) != null ? stack1 : "")
    + "\n              </div>\n            </div>";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0),"right",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":57,"column":20},"end":{"line":57,"column":52}}}),(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0),"bottom",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":57,"column":53},"end":{"line":57,"column":86}}}),{"name":"any","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":12},"end":{"line":68,"column":20}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"notify__image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":47},"end":{"line":58,"column":98}}})) != null ? stack1 : "")
    + "\">\n              <img class=\"notify__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":59,"column":65},"end":{"line":59,"column":149}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":14},"end":{"line":66,"column":21}}})) != null ? stack1 : "")
    + "            </div>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__btn-container\">\n          <button class=\"btn-text notify__btn notify__btn-alert js-notify-btn-alert\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":76,"column":97},"end":{"line":76,"column":114}}}) : helper))) != null ? stack1 : "")
    + "\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":77,"column":12},"end":{"line":77,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n          </button>\n        </div>\n";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__btn-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_prompts") : depth0),{"name":"each","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":84,"column":10},"end":{"line":88,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button class=\"btn-text notify__btn notify__btn-prompt js-notify-btn-prompt\" data-event=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_callbackEvent") || (depth0 != null ? lookupProperty(depth0,"_callbackEvent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data,"loc":{"start":{"line":85,"column":99},"end":{"line":85,"column":117}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":85,"column":131},"end":{"line":85,"column":147}}}) : helper))) != null ? stack1 : "")
    + "\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":86,"column":12},"end":{"line":86,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n          </button>\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"popup",{"name":"equals","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":97,"column":4},"end":{"line":101,"column":15}}})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"btn-icon notify__btn-icon notify__close-btn js-notify-close-btn\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\n      <span class=\"icon\"></span>\n    </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_attributes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":5},"end":{"line":4,"column":55}}})) != null ? stack1 : "")
    + " class=\"notify__popup notify__popup-type-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":4,"column":96},"end":{"line":4,"column":105}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":105},"end":{"line":4,"column":141}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_src") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":141},"end":{"line":4,"column":179}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":179},"end":{"line":4,"column":241}}})) != null ? stack1 : "")
    + "\">\n  <div class=\"notify__popup-inner\">\n\n    <div class=\"notify__content\">\n      <div class=\"notify__content-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_showIcon") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":28,"column":15}}})) != null ? stack1 : "")
    + "        \n        <div class=\"notify__section\">\n          <div class=\"notify__section-inner\">\n          \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_src") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":46,"column":21}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":12},"end":{"line":54,"column":21}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_src") : stack1),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":12},"end":{"line":69,"column":19}}})) != null ? stack1 : "")
    + "            \n          </div>\n        </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":8},"end":{"line":80,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":8},"end":{"line":90,"column":19}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCancellable") : depth0),(depth0 != null ? lookupProperty(depth0,"_showCloseButton") : depth0),{"name":"all","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":96,"column":4},"end":{"line":102,"column":12}}})) != null ? stack1 : "")
    + "\n  </div>\n\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":106,"column":2},"end":{"line":106,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n\n</div>\n\n<div class=\"shadow notify__shadow js-notify-shadow-click\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__title\">\n    <div class=\"notify-push__title-inner\" role=\"heading\" aria-level=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),"notify",(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":8,"column":69},"end":{"line":8,"column":112}}}))
    + "\">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":25}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__body\">\n    <div class=\"notify-push__body-inner\">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":24}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div id=\"notify-push-heading\" class=\"notify-push__inner js-notify-push-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n\n<button class=\"btn-icon notify-push__close-btn js-notify-push-close-btn\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\n  <span class=\"icon\"></span>\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"page__header\">\n    <div class=\"page__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"any","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":34,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":6},"end":{"line":42,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"page__title\">\n        <div class=\"page__title-inner js-heading\"></div>\n      </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__subtitle\">\n        <div class=\"page__subtitle-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":32}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__body\">\n        <div class=\"page__body-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":31,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n      </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":32}}})) != null ? stack1 : "")
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":30,"column":28}}})) != null ? stack1 : "")
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__instruction\">\n        <div class=\"page__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":39,"column":10},"end":{"line":39,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"page__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":46,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"article__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow js-shadow u-display-none\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["hiddenHotspots"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <img class=\"hiddenhotspots__graphic\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"/>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        Missing Graphic\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner hiddenhotspots__inner\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_hiddenHotspots") : stack1)) != null ? lookupProperty(stack1,"ariaRegion") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_hiddenHotspots") : stack1)) != null ? lookupProperty(stack1,"ariaRegion") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":131},"end":{"line":1,"column":205}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"component__widget hiddenhotspots__widget\">\n      <div class=\"hiddenhotspots__graphic-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":9,"column":15}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n    <div class=\"hiddenhotspots__mobile-navigation clearfix\">\n      <button class=\"hiddenhotspots__mobile-navigation-left\"><i class=\"icon icon-arrow-left\"></i></button>\n      <button class=\"hiddenhotspots__mobile-navigation-right\"><i class=\"icon icon-arrow-right\"></i></button>\n    </div>\n    <div class=\"hiddenhotspots__item-counter\">\n    </div>\n    <div class=\"btn__container\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hiddenHotspotsItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<icon class=\"hiddenhotspots__pin-remove-icon icon icon-delete\"></icon>\n<icon class=\"hiddenhotspots__pin-is-correct-icon icon icon-tick\"></icon>\n<icon class=\"hiddenhotspots__pin-is-incorrect-icon icon icon-cross\"></icon>";
},"useData":true});

this["Handlebars"]["templates"]["hiddenHotspotsZone"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<icon class=\"icon icon-tick\"></icon>";
},"useData":true});

this["Handlebars"]["templates"]["media"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"aria-label js-skip-to-transcript\" tabindex=\"-1\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_media") : stack1)) != null ? lookupProperty(stack1,"skipToTranscript") : stack1), depth0))
    + "\"></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "    <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp3") : stack1), depth0))
    + "\" type=\"audio/mp3\" style=\"width: 100%; height: 100%;\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <img class=\"media_poster is-audio\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1), depth0))
    + "\">\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogg") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":46,"column":11}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogg") : stack1), depth0))
    + "\" type=\"audio/ogg\" style=\"width: 100%; height: 100%;\"/>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <video aria-hidden=\"true\" preload=\"none\"\n        "
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_aspectRatio") : depth0),"square",{"name":"equals","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":25,"column":19}}})) != null ? stack1 : "")
    + "        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_playsinline") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":8},"end":{"line":26,"column":47}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),"video/vimeo",{"name":"equals","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":26,"column":48},"end":{"line":26,"column":130}}})) != null ? stack1 : "")
    + " style=\"width:100%; height:100%;\" controls=\"controls\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"source") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":39,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_useClosedCaptions") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":8},"end":{"line":44,"column":15}}})) != null ? stack1 : "")
    + "      </video>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " width=\"640\" height=\"640\"\n        ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_aspectRatio") : depth0),"portrait",{"name":"equals","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":23,"column":8},"end":{"line":25,"column":8}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return " width=\"540\" height=\"960\"\n        ";
},"15":function(container,depth0,helpers,partials,data) {
    return " width=\"640\" height=\"360\"\n        ";
},"17":function(container,depth0,helpers,partials,data) {
    return " playsinline";
},"19":function(container,depth0,helpers,partials,data) {
    return "";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "poster=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1), depth0))
    + "\"";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"source") : stack1), depth0))
    + "\" type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + "\"/>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp4") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogv") : stack1),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":35,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"webm") : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":38,"column":17}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp4") : stack1), depth0))
    + "\" type=\"video/mp4\"/>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogv") : stack1), depth0))
    + "\" type=\"video/ogg\"/>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"webm") : stack1), depth0))
    + "\" type=\"video/webm\"/>\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"cc") : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":10},"end":{"line":43,"column":19}}})) != null ? stack1 : "");
},"33":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <track kind=\"subtitles\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":42,"column":41},"end":{"line":42,"column":48}}}) : helper)))
    + "\" type=\"text/vtt\" srclang=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"srclang") || (depth0 != null ? lookupProperty(depth0,"srclang") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"srclang","hash":{},"data":data,"loc":{"start":{"line":42,"column":75},"end":{"line":42,"column":86}}}) : helper)))
    + "\" />\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"media__transcript-container\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":4},"end":{"line":63,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_externalTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":4},"end":{"line":75,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":4},"end":{"line":83,"column":11}}})) != null ? stack1 : "")
    + "\n  </div>\n";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"media__transcript-btn media__transcript-btn-inline js-media-inline-transcript-toggle\" aria-expanded=\"false\">\n      <span class=\"media__transcript-btn-text\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(39, data, 0),"data":data,"loc":{"start":{"line":56,"column":8},"end":{"line":60,"column":15}}})) != null ? stack1 : "")
    + "      </span>\n    </button>\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1), depth0))
    + "\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0))
    + "\n";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"media__transcript-btn media__transcript-btn-external js-media-external-transcript-click\" onclick=\"window.open('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0))
    + "')\">\n      <span class=\"media__transcript-btn-text\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLinkButton") : stack1),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(39, data, 0),"data":data,"loc":{"start":{"line":68,"column":8},"end":{"line":72,"column":15}}})) != null ? stack1 : "")
    + "      </span>\n    </button>\n";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLinkButton") : stack1), depth0))
    + "\n";
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"media__transcript-body-inline\" role=\"region\" aria-label=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.program(47, data, 0),"data":data,"loc":{"start":{"line":78,"column":73},"end":{"line":78,"column":198}}})) != null ? stack1 : "")
    + "\">\n      <div class=\"media__transcript-body-inline-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptBody") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":80,"column":8},"end":{"line":80,"column":54}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1), depth0));
},"47":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"component__inner media__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_externalTranscript") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":8,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget media__widget\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp3") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":47,"column":9}}})) != null ? stack1 : "")
    + "  </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_transcript") : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":2},"end":{"line":86,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["responsiveIframe"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_scrolling") || (depth0 != null ? lookupProperty(depth0,"_scrolling") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_scrolling","hash":{},"data":data,"loc":{"start":{"line":6,"column":67},"end":{"line":6,"column":81}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "no";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner responsiveiframe__inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"component__widget responsiveiframe__widget\">\n    <div class=\"responsiveiframe__iframe-holder\">\n      <iframe title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"iframeTitle") || (depth0 != null ? lookupProperty(depth0,"iframeTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iframeTitle","hash":{},"data":data,"loc":{"start":{"line":6,"column":21},"end":{"line":6,"column":36}}}) : helper)))
    + "\" scrolling=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_scrolling") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":49},"end":{"line":6,"column":98}}})) != null ? stack1 : "")
    + "\" class=\"responsiveiframe__iframe\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_source") || (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_source","hash":{},"data":data,"loc":{"start":{"line":6,"column":138},"end":{"line":6,"column":149}}}) : helper)))
    + "\"\n        data-height-large=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_height") : depth0)) != null ? lookupProperty(stack1,"_large") : stack1), depth0))
    + "\" data-height-medium=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_height") : depth0)) != null ? lookupProperty(stack1,"_medium") : stack1), depth0))
    + "\" data-height-small=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_height") : depth0)) != null ? lookupProperty(stack1,"_small") : stack1), depth0))
    + "\"\n        data-width-large=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_width") : depth0)) != null ? lookupProperty(stack1,"_large") : stack1), depth0))
    + "\" data-width-medium=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_width") : depth0)) != null ? lookupProperty(stack1,"_medium") : stack1), depth0))
    + "\" data-width-small=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_width") : depth0)) != null ? lookupProperty(stack1,"_small") : stack1), depth0))
    + "\" allowfullscreen webkitallowfullscreen mozallowfullscreen>\n      </iframe>\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["stacker"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "is-disabled "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":82},"end":{"line":3,"column":174}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "is-complete is-submitted user "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":131},"end":{"line":3,"column":167}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "is-correct ";
},"5":function(container,depth0,helpers,partials,data) {
    return "stacker__not-sliding ";
},"7":function(container,depth0,helpers,partials,data) {
    return "stacker__not-ordering";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner stacker__inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"component__widget stacker__widget "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":48},"end":{"line":3,"column":185}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldUseSliding") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":185},"end":{"line":3,"column":246}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldUseOrdering") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":246},"end":{"line":3,"column":308}}})) != null ? stack1 : "")
    + "\">\n    <div class=\"stacker\"></div>\n  </div>\n  <div class=\"btn__container\"></div>\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["stackerItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"stacker__item-text stacker__item-text-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":25,"column":56},"end":{"line":25,"column":66}}}) : helper)))
    + "\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_originalIndex") || (depth0 != null ? lookupProperty(depth0,"_originalIndex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_originalIndex","hash":{},"data":data,"loc":{"start":{"line":25,"column":80},"end":{"line":25,"column":98}}}) : helper)))
    + "\">\n        <div class=\"stacker__item-text-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"image") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":31,"column":17}}})) != null ? stack1 : "")
    + "          <div class=\"stacker__item-image-text\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":33,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n      </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"stacker__item-image\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":29,"column":22},"end":{"line":29,"column":31}}}) : helper)))
    + "\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":29,"column":45},"end":{"line":29,"column":52}}}) : helper)))
    + "\" />\n          </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"stacker__item-inner\">\n\n  <button class=\"stacker__item-navigation stacker__item-navigation-left "
    + alias4(((helper = (helper = lookupProperty(helpers,"_originalIndex") || (depth0 != null ? lookupProperty(depth0,"_originalIndex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_originalIndex","hash":{},"data":data,"loc":{"start":{"line":3,"column":72},"end":{"line":3,"column":90}}}) : helper)))
    + "\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"previousAriaLabel") || (depth0 != null ? lookupProperty(depth0,"previousAriaLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previousAriaLabel","hash":{},"data":data,"loc":{"start":{"line":3,"column":104},"end":{"line":3,"column":125}}}) : helper)))
    + "\">\n    <i class=\"icon\"></i>\n  </button>\n\n  <button class=\"stacker__item-navigation stacker__item-navigation-right\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"nextAriaLabel") || (depth0 != null ? lookupProperty(depth0,"nextAriaLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nextAriaLabel","hash":{},"data":data,"loc":{"start":{"line":7,"column":86},"end":{"line":7,"column":103}}}) : helper)))
    + "\">\n    <i class=\"icon\"></i>\n  </button>\n\n  <div class=\"stacker__item-marking\">\n    <i class=\"stacker__item-marking-is-correct icon\"></i>\n    <i class=\"stacker__item-marking-is-incorrect icon\"></i>\n  </div>\n\n  <button class=\"stacker__item-sorter\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"itemPositionAriaLabel") || (depth0 != null ? lookupProperty(depth0,"itemPositionAriaLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemPositionAriaLabel","hash":{},"data":data,"loc":{"start":{"line":16,"column":51},"end":{"line":16,"column":76}}}) : helper)))
    + "\">\n    <i class=\"stacker__item-sorter-up icon\"></i>\n    <span class=\"stacker__item-sorter-index\">"
    + alias4((lookupProperty(helpers,"inc")||(depth0 && lookupProperty(depth0,"inc"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"index") : depth0),{"name":"inc","hash":{},"data":data,"loc":{"start":{"line":18,"column":45},"end":{"line":18,"column":58}}}))
    + "</span>\n    <i class=\"stacker__item-sorter-down icon\"></i>\n  </button>\n\n  <div class=\"stacker__item-texts-holder\">\n    <div class=\"stacker__item-texts clearfix\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_options") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":37,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n  </div>\n\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["stackerItemSorterPicker"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"stacker__item-sorter-picker-selector element-color-control\" data-index="
    + alias3(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":90},"end":{"line":6,"column":100}}}) : helper)))
    + " aria-label=\""
    + alias3((lookupProperty(helpers,"inc")||(depth0 && lookupProperty(depth0,"inc"))||alias2).call(alias1,depth0,{"name":"inc","hash":{},"data":data,"loc":{"start":{"line":6,"column":113},"end":{"line":6,"column":125}}}))
    + ", "
    + alias3(container.lambda((depths[1] != null ? lookupProperty(depths[1],"newPositionAriaLabel") : depths[1]), depth0))
    + "\">\n      "
    + alias3((lookupProperty(helpers,"inc")||(depth0 && lookupProperty(depth0,"inc"))||alias2).call(alias1,depth0,{"name":"inc","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":18}}}))
    + "\n    </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"stacker__item-sorter-picker-pin element-color-border-dark\">\n  <i class=\"icon\"></i>\n</div>\n<div class=\"stacker__item-sorter-picker-inner element-color-border-dark\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"availableIndexes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":9,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["vimeo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"aria-label js-skip-to-transcript\" tabindex=\"-1\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_vimeo") : stack1)) != null ? lookupProperty(stack1,"skipToTranscript") : stack1), depth0))
    + "\"></button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"component__inner vimeo__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_externalTranscript") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":8,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget vimeo__widget\"></div>\n\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["vimeoTranscript"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\"vimeo__transcript-btn vimeo__transcript-btn-inline js-vimeo-inline-transcript-toggle\" aria-expanded=\"false\">\n  <span class=\"vimeo__transcript-btn-text\">\n    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"inlineTranscriptButton") || (depth0 != null ? lookupProperty(depth0,"inlineTranscriptButton") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inlineTranscriptButton","hash":{},"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":30}}}) : helper)))
    + "\n  </span>\n</button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\"vimeo__transcript-btn vimeo__transcript-btn-external js-vimeo-external-transcript-click\" role=\"link\" onclick=\"top.window.open('"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"transcriptLink") || (depth0 != null ? lookupProperty(depth0,"transcriptLink") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"transcriptLink","hash":{},"data":data,"loc":{"start":{"line":10,"column":142},"end":{"line":10,"column":160}}}) : helper)))
    + "')\">\n  <span class=\"vimeo__transcript-btn-text\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"transcriptLinkButton") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":16,"column":11}}})) != null ? stack1 : "")
    + "  </span>\n</button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"transcriptLinkButton") || (depth0 != null ? lookupProperty(depth0,"transcriptLinkButton") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"transcriptLinkButton","hash":{},"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":13,"column":28}}}) : helper)))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"transcriptLink") || (depth0 != null ? lookupProperty(depth0,"transcriptLink") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"transcriptLink","hash":{},"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":15,"column":22}}}) : helper)))
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vimeo__transcript-body-inline\" role=\"region\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inlineTranscriptButton") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":56},"end":{"line":22,"column":133}}})) != null ? stack1 : "")
    + ">\n  <div class=\"vimeo__transcript-body-inline-inner\">\n    "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"inlineTranscriptBody") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":24,"column":38}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " aria-label=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"inlineTranscriptButton") || (depth0 != null ? lookupProperty(depth0,"inlineTranscriptButton") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inlineTranscriptButton","hash":{},"data":data,"loc":{"start":{"line":22,"column":99},"end":{"line":22,"column":125}}}) : helper)))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_inlineTranscript") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_externalTranscript") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":19,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_inlineTranscript") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["youtube"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"aria-label js-skip-to-transcript\" tabindex=\"-1\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_youtube") : stack1)) != null ? lookupProperty(stack1,"skipToTranscript") : stack1), depth0))
    + "\"></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <iframe width=\"640px\" height=\"360px\" style=\"width:100%;\"\n      src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"_source") : stack1), depth0))
    + "?&autoplay="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"_autoplay") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":15,"column":17},"end":{"line":15,"column":59}}})) != null ? stack1 : "")
    + "&rel="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"_showRelated") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":16,"column":11},"end":{"line":16,"column":56}}})) != null ? stack1 : "")
    + "&loop="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_loop") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":43}}})) != null ? stack1 : "")
    + "&modestbranding="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"_modestBranding") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":18,"column":22},"end":{"line":18,"column":70}}})) != null ? stack1 : "")
    + "&color="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"_progressColor") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":13},"end":{"line":19,"column":75}}})) != null ? stack1 : "")
    + "&controls="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"_controls") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":58}}})) != null ? stack1 : "")
    + "&playsinline="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"_playsinline") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":21,"column":19},"end":{"line":21,"column":64}}})) != null ? stack1 : "")
    + "&enablejsapi=1&iv_load_policy="
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"_showAnnotations") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":22,"column":36},"end":{"line":22,"column":85}}})) != null ? stack1 : "")
    + "\"\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"_allowFullscreen") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":23,"column":67}}})) != null ? stack1 : "")
    + "\n      frameborder=\"0\">\n    </iframe>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "1";
},"6":function(container,depth0,helpers,partials,data) {
    return "0";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"_progressColor") : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    return "3";
},"12":function(container,depth0,helpers,partials,data) {
    return " allowfullscreen=\"true\"";
},"14":function(container,depth0,helpers,partials,data) {
    return "    ERROR: No media source set!\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"youtube__transcript-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":4},"end":{"line":40,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_externalTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":4},"end":{"line":52,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":60,"column":11}}})) != null ? stack1 : "")
    + "\n  </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"youtube__transcript-btn youtube__transcript-btn-inline js-youtube-inline-transcript-toggle\" aria-expanded=\"false\">\n      <span class=\"youtube__transcript-btn-text\">\n        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1), depth0))
    + "\n      </span>\n    </button>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"youtube__transcript-btn youtube__transcript-btn-external js-youtube-external-transcript-click\" onclick=\"top.window.open('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0))
    + "')\">\n      <span class=\"youtube__transcript-btn-text\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLinkButton") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":45,"column":8},"end":{"line":49,"column":15}}})) != null ? stack1 : "")
    + "      </span>\n    </button>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLinkButton") : stack1), depth0))
    + "\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0))
    + "\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"youtube__transcript-body-inline\" role=\"region\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":62},"end":{"line":55,"column":163}}})) != null ? stack1 : "")
    + ">\n      <div class=\"youtube__transcript-body-inline-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptBody") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":57,"column":8},"end":{"line":57,"column":54}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1), depth0))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"component__inner youtube__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_externalTranscript") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":8,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget youtube__widget\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"_source") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":28,"column":11}}})) != null ? stack1 : "")
    + "\n  </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_transcript") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":2},"end":{"line":63,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["dyslexiaHelper"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"dyslexiahelper__drawer-inner\">\n  <div class=\"dyslexiahelper__titleText\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"titleText") || (depth0 != null ? lookupProperty(depth0,"titleText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titleText","hash":{},"data":data,"loc":{"start":{"line":2,"column":41},"end":{"line":2,"column":54}}}) : helper)))
    + "</div>\n  <div class=\"dyslexiahelper__user-instructions\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"instructionsText") || (depth0 != null ? lookupProperty(depth0,"instructionsText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instructionsText","hash":{},"data":data,"loc":{"start":{"line":3,"column":61},"end":{"line":3,"column":81}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"instructionsText") || (depth0 != null ? lookupProperty(depth0,"instructionsText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instructionsText","hash":{},"data":data,"loc":{"start":{"line":3,"column":83},"end":{"line":3,"column":103}}}) : helper)))
    + "</div>\n  <div role=\"list\">\n    <div role=\"listitem\" class=\"drawer__item\">\n      <button class=\"drawer__item-open dyslexiahelper__drawer-button\" data-dyslexiaHelper-class=\"dyslexia-1\">\n        <div class=\"accessible__text-block dyslexiahelper__drawer-button-inner\">Sample Colour Palette 1</div>\n      </button>\n    </div>\n    <div role=\"listitem\" class=\"drawer__item\">\n      <button class=\"drawer__item-open dyslexiahelper__drawer-button\" data-dyslexiaHelper-class=\"dyslexia-2\">\n        <div class=\"accessible__text-block dyslexiahelper__drawer-button-inner\">Sample Colour Palette 2</div>\n      </button>\n    </div>\n    <div role=\"listitem\" class=\"drawer__item\">\n      <button class=\"drawer__item-open dyslexiahelper__drawer-button\" data-dyslexiaHelper-class=\"dyslexia-3\">\n        <div class=\"accessible__text-block dyslexiahelper__drawer-button-inner\">Sample Colour Palette 3</div>\n      </button>\n    </div>\n    <div role=\"listitem\" class=\"drawer__item\">\n      <button class=\"drawer__item-open dyslexiahelper__drawer-button\" data-dyslexiaHelper-class=\"dyslexia-4\">\n        <div class=\"accessible__text-block dyslexiahelper__drawer-button-inner\">Sample Colour Palette 4</div>\n      </button>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["glossary"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"glossary__search-container js-glossary-search-container\">\n        <div class=\"glossary__textbox-container\">\n\n          <input class=\"glossary__textbox js-glossary-textbox-change\" id=\"glossarySearch\" type=\"text\" placeholder=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"searchPlaceholder") || (depth0 != null ? lookupProperty(depth0,"searchPlaceholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchPlaceholder","hash":{},"data":data,"loc":{"start":{"line":14,"column":115},"end":{"line":14,"column":138}}}) : helper))) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"searchPlaceholder") || (depth0 != null ? lookupProperty(depth0,"searchPlaceholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchPlaceholder","hash":{},"data":data,"loc":{"start":{"line":14,"column":152},"end":{"line":14,"column":175}}}) : helper))) != null ? stack1 : "")
    + "\">\n\n          <div class=\"label-icon glossary__search-icon js-glossary-search-icon\">\n            <div class=\"icon\" aria-hidden=\"true\"></div>\n          </div>\n\n          <button class=\"btn-icon glossary__cancel-btn u-display-none js-glossary-cancel-btn-click\" tabindex=\"0\" aria-label=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"clearSearch") || (depth0 != null ? lookupProperty(depth0,"clearSearch") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"clearSearch","hash":{},"data":data,"loc":{"start":{"line":20,"column":125},"end":{"line":20,"column":140}}}) : helper)))
    + "\">\n            <span class=\"icon\" aria-hidden=\"true\"></span>\n          </button>\n        </div>\n\n        <div class=\"glossary__checkbox-container\">\n          <input class=\"glossary__checkbox-input js-glossary-checkbox-change\" id=\"glossaryCheckbox\" type=\"checkbox\">\n          <label class=\"glossary__checkbox-label\" for=\"glossaryCheckbox\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"searchWithInDescriptionLabel") || (depth0 != null ? lookupProperty(depth0,"searchWithInDescriptionLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchWithInDescriptionLabel","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":46}}}) : helper))) != null ? stack1 : "")
    + "\n          </label>\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"glossary__index-container js-glossary-index-container\" role=\"navigation\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_glossary") : stack1)) != null ? lookupProperty(stack1,"labelNavigation") : stack1), depth0))
    + "\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"glossary__inner js-glossary-inner\">\n  "
    + ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_glossary") : stack1)) != null ? lookupProperty(stack1,"glossary") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":63}}})) != null ? stack1 : "")
    + "\n\n  <div class=\"glossary__header\">\n    <div class=\"glossary__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSearchEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":33,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isIndexEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":37,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n\n  <div class=\"glossary__items-container js-glossary-items-container\" role=\"list\">\n  </div>\n\n  <div class=\"glossary__item-not-found js-glossary-item-not-found u-display-none\">\n    <div class=\"glossary__item-not-found-inner\">\n      "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"itemNotFoundMessage") || (depth0 != null ? lookupProperty(depth0,"itemNotFoundMessage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemNotFoundMessage","hash":{},"data":data,"loc":{"start":{"line":48,"column":6},"end":{"line":48,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n\n  <div class=\"glossary__alert js-glossary-alert aria-label\" aria-live=\"polite\" aria-atomic=\"true\"></div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["glossaryIndexItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"glossary__index-item\" role=\"listitem\">\n  <a href=\"#"
    + alias4(((helper = (helper = lookupProperty(helpers,"_key") || (depth0 != null ? lookupProperty(depth0,"_key") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_key","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":20}}}) : helper)))
    + "\" class=\"glossary__index-link js-glossary-index-link\" aria-label=\""
    + alias4(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_glossary") : stack1)) != null ? lookupProperty(stack1,"labelLink") : stack1), depth0))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"_key") || (depth0 != null ? lookupProperty(depth0,"_key") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_key","hash":{},"data":data,"loc":{"start":{"line":5,"column":131},"end":{"line":5,"column":139}}}) : helper)))
    + "\">\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"_key") || (depth0 != null ? lookupProperty(depth0,"_key") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_key","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":12}}}) : helper)))
    + "\n  </a>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["glossaryItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\"glossary__item-term drawer__item-btn js-glossary-item-term-click\" aria-expanded=\"false\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"term") || (depth0 != null ? lookupProperty(depth0,"term") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":1,"column":115},"end":{"line":1,"column":125}}}) : helper))) != null ? stack1 : "")
    + "\">\n  <span class=\"glossary__item-term-title drawer__item-title\">\n    <span class=\"glossary__item-term-title-inner drawer__item-title-inner\">\n      "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"term") || (depth0 != null ? lookupProperty(depth0,"term") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":16}}}) : helper))) != null ? stack1 : "")
    + "\n    </span>\n  </span>\n</button>\n\n<div class=\"glossary__item-description js-glossary-item-description\" role=\"region\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"term") || (depth0 != null ? lookupProperty(depth0,"term") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":9,"column":95},"end":{"line":9,"column":105}}}) : helper))) != null ? stack1 : "")
    + "\">\n  <div class=\"glossary__item-description-inner\">\n    "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":11,"column":29}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageFooterNavigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "display-icons";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_shouldShowPrevious") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":10,"column":9}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button data-destination=\"prev\"\n    class=\"pagefooternavigation__btn pagefooternavigation__btn-prev js-item-label "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isPreviousLocked") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":82},"end":{"line":5,"column":123}}})) != null ? stack1 : "")
    + "\"\n    title=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"prevButtonText") || (depth0 != null ? lookupProperty(depth0,"prevButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"prevButtonText","hash":{},"data":data,"loc":{"start":{"line":6,"column":11},"end":{"line":6,"column":29}}}) : helper)))
    + "\">\n    <i class=\"icon icon-controls-left\"></i>\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_displayIcons") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":58}}})) != null ? stack1 : "")
    + "\n  </button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "is-locked";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"prevButtonText") || (depth0 != null ? lookupProperty(depth0,"prevButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"prevButtonText","hash":{},"data":data,"loc":{"start":{"line":8,"column":29},"end":{"line":8,"column":47}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button data-destination=\"home\"\n    class=\"pagefooternavigation__btn pagefooternavigation__btn-home js-item-label\"\n    title=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"homeButtonText") || (depth0 != null ? lookupProperty(depth0,"homeButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"homeButtonText","hash":{},"data":data,"loc":{"start":{"line":16,"column":11},"end":{"line":16,"column":29}}}) : helper)))
    + "\">\n    <i class=\"icon icon-home\"></i>\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_displayIcons") : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":18,"column":58}}})) != null ? stack1 : "")
    + "\n  </button>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"homeButtonText") || (depth0 != null ? lookupProperty(depth0,"homeButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"homeButtonText","hash":{},"data":data,"loc":{"start":{"line":18,"column":29},"end":{"line":18,"column":47}}}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_shouldShowUp") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":30,"column":9}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button data-destination=\"up\"\n    class=\"pagefooternavigation__btn pagefooternavigation__btn-up js-item-label\" \n    title=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"upButtonText") || (depth0 != null ? lookupProperty(depth0,"upButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"upButtonText","hash":{},"data":data,"loc":{"start":{"line":26,"column":11},"end":{"line":26,"column":27}}}) : helper)))
    + "\">\n    <i class=\"icon icon-controls-up\"></i>\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_displayIcons") : depth0),{"name":"unless","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":28,"column":56}}})) != null ? stack1 : "")
    + "\n  </button>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"upButtonText") || (depth0 != null ? lookupProperty(depth0,"upButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"upButtonText","hash":{},"data":data,"loc":{"start":{"line":28,"column":29},"end":{"line":28,"column":45}}}) : helper)));
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_shouldShowNext") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":2},"end":{"line":41,"column":9}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button data-destination=\"next\"\n    class=\"pagefooternavigation__btn pagefooternavigation__btn-next js-item-label "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isNextLocked") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":82},"end":{"line":36,"column":119}}})) != null ? stack1 : "")
    + "\"\n    title=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"nextButtonText") || (depth0 != null ? lookupProperty(depth0,"nextButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"nextButtonText","hash":{},"data":data,"loc":{"start":{"line":37,"column":11},"end":{"line":37,"column":29}}}) : helper)))
    + "\">\n    <i class=\"icon icon-controls-right\"></i>\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_displayIcons") : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":4},"end":{"line":39,"column":58}}})) != null ? stack1 : "")
    + "\n  </button>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"nextButtonText") || (depth0 != null ? lookupProperty(depth0,"nextButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"nextButtonText","hash":{},"data":data,"loc":{"start":{"line":39,"column":29},"end":{"line":39,"column":47}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pagefooternavigation__inner "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_displayIcons") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":81}}})) != null ? stack1 : "")
    + "\" tabindex=\"0\">\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hidePrevButton") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":11,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hideHomeButton") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":20,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hideUpButton") : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":31,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hideNextButton") : depth0),{"name":"unless","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":2},"end":{"line":42,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressIndicator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <span class=\"aria-label js-indicator-aria-label\">\n    "
    + container.escapeExpression((lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":10,"column":25}}}))
    + "\n  </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<span class=\"pagelevelprogress__indicator-inner\">\n\n  <span class=\"pagelevelprogress__indicator-bar js-indicator-bar\" style=\"width: "
    + alias4(((helper = (helper = lookupProperty(helpers,"percentageComplete") || (depth0 != null ? lookupProperty(depth0,"percentageComplete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"percentageComplete","hash":{},"data":data,"loc":{"start":{"line":6,"column":80},"end":{"line":6,"column":102}}}) : helper)))
    + "%;\"></span>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\n</span>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<span class=\"tooltip\">\n  "
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"progress") : stack1), depth0))
    + "\n</span>\n";
},"useData":true});

this["Handlebars"]["templates"]["tutor"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"tutor__title\">\n        <div class=\"tutor__title-inner\" role=\"heading\" aria-level=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),"@component+1",(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":10,"column":67},"end":{"line":10,"column":117}}}))
    + "\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":29}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"altTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":20,"column":6}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"tutor__title aria-label\">\n        <div class=\"tutor__title-inner\" role=\"heading\" aria-level=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),"@component+1",(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":16,"column":67},"end":{"line":16,"column":117}}}))
    + "\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"altTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":17,"column":32}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n      ";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button\n        class=\"btn-icon tutor__btn-icon js-tutor-btn\"\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_button") : depth0)) != null ? lookupProperty(stack1,"ariaLabel") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":31,"column":97}}})) != null ? stack1 : "")
    + "\n      >\n        <span class=\"icon\" aria-hidden=\"true\"></span>\n      </button>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression((lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_button") : depth0)) != null ? lookupProperty(stack1,"ariaLabel") : stack1),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":31,"column":45},"end":{"line":31,"column":89}}}))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"tutor__inner\">\n\n  <div class=\"tutor__content\">\n    <div class=\"tutor__content-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":20,"column":13}}})) != null ? stack1 : "")
    + "\n      <div class=\"tutor__body\">\n        <div class=\"tutor__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":24,"column":10},"end":{"line":24,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"notify",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":28,"column":13},"end":{"line":28,"column":36}}}),(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"overlay",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":28,"column":37},"end":{"line":28,"column":61}}}),{"name":"any","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":35,"column":14}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu-item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "is-visited";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-disabled=\"true\" aria-label=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_lockedLabel") || (depth0 != null ? lookupProperty(depth0,"_lockedLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_lockedLabel","hash":{},"data":data,"loc":{"start":{"line":2,"column":135},"end":{"line":2,"column":151}}}) : helper)))
    + "\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"menu-item__duration boxmenu-item__duration\">\n      <div class=\"menu-item__duration-inner boxmenu-item__duration-inner\">\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":103}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":10,"column":104},"end":{"line":10,"column":118}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1), depth0)) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"menu-item__inner\" style=\"background-image: url("
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + ");\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxmenu") : stack1)) != null ? lookupProperty(stack1,"menuItem") : stack1), depth0))
    + "\">\n  <a href=\"#/id/"
    + alias2(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":2,"column":23}}}) : helper)))
    + "\" class=\"menu-item__link "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":48},"end":{"line":2,"column":83}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":85},"end":{"line":2,"column":160}}})) != null ? stack1 : "")
    + ">\n    <div class=\"menu-item__title\">\n      <div class=\"menu-item__title-inner accessible-text-block\" role=\"heading\" aria-level=\"2\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"displayTitle") || (depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"displayTitle","hash":{},"data":data,"loc":{"start":{"line":4,"column":94},"end":{"line":4,"column":112}}}) : helper))) != null ? stack1 : "")
    + "</div>\n    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"menu-item__body\">\n      <div class=\"menu-item__body-inner\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":16,"column":41},"end":{"line":16,"column":51}}}) : helper))) != null ? stack1 : "")
    + "</div>\n    </div>\n\n    <div class=\"menu-item__progress boxmenu-item__progress js-menu-item-progress\">\n    </div>\n  </a>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"menu-addition__title\">\n            <div class=\"menu-addition__title-inner accessible-text-block\" role=\"heading\" aria-level=\"1\">\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"displayTitle") || (depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data,"loc":{"start":{"line":12,"column":14},"end":{"line":12,"column":32}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":10},"end":{"line":22,"column":17}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"menu-addition__title\">\n              <div class=\"menu-addition__title-inner accessible-text-block\" role=\"heading\" aria-level=\"1\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\n              </div>\n            </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"menu-addition__body\">\n            <div class=\"menu-addition__body-inner accessible-text-block\">\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":27,"column":14},"end":{"line":27,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"menu-addition\">\n  <div class=\"menu-addition__inner\">\n    <div class=\"menu-addition__text-wrapper\">\n      <div class=\"menu-addition__text-wrapper-inner\">\n        <div class=\"menu-addition__logo\">\n          <div class=\"menu-addition__logo-inner\">\n          </div>\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":30,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"menu-container\" role=\"region\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxmenu") : stack1)) != null ? lookupProperty(stack1,"ariaRegion") : stack1), depth0))
    + "\">\n  <div class='menu-container__inner box-menu-inner js-children clearfix'>\n    <div class=\"menu-instruction\">\n      <div class=\"menu-instruction__inner accessible-text-block\">\n        "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_menu") : depth0)) != null ? lookupProperty(stack1,"_boxMenuCustom") : stack1)) != null ? lookupProperty(stack1,"_menuInstructionText") : stack1), depth0)) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n  </div>\n  <div class=\"aria-label a11y-ignore-focus prevent-default\" tabindex=\"0\"\n    aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxmenu") : stack1)) != null ? lookupProperty(stack1,"menuEnd") : stack1), depth0))
    + "\"/>\n</div>\n";
},"useData":true});

return this["Handlebars"];

});