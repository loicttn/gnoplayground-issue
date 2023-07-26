Issues:

1. `immer` dependency is missing
   => `yarn add immer`` to mitigate

2. Issue with css import

```
   ./node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.css
   Global CSS cannot be imported from within node_modules.
   Read more: https://nextjs.org/docs/messages/css-npm
   Location: node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionViewItems.js
```
