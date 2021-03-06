// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  ".",
  //Look in subdirectories
  true,
  // Only include "_base-" prefixed .vue files
  /_base-[\w-]+\.vue$/
);

// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Get the component config
  let aux = fileName.split("/");
  let fileNameAux = aux[aux.length - 1];
  const componentConfig = requireComponent(fileName);
  // Get the PascalCase version of the component name
  const componentName = upperFirst(
    camelCase(
      fileNameAux
        // Remove the "./_" from the beginning
        .replace(/^\.\/_/, "")
        // Remove the file extension from the end
        .replace(/\.\w+$/, "")
    )
  );
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});
