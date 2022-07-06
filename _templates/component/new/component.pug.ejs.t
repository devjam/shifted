---
to: src/site/includes/components/<%- h.changeCase.param(name) %>.pug
---
mixin <%- h.changeCase.param(name) %>(props = {})
	-
		props = Object.assign({}, props);

	div(class="<%- locals.style ? `c-${h.changeCase.param(name)}` : null %>")&attributes(attributes)
