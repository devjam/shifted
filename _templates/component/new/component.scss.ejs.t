---
to: "<%- locals.style ? `src/styles/components/${h.changeCase.param(name)}.scss` : null %>"
---
.c-<%- h.changeCase.param(name) %> {
}

.c-<%- h.changeCase.param(name) %>__ {
}