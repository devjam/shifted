---
to: src/site/includes/components/<%- h.changeCase.param(name) %>.pug
---
mixin <%- h.changeCase.param(name) %>(props = {})
	-
		props = Object.assign({}, props);

	._&attributes(attributes)
