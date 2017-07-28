/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-semantic-tabs',

  afterInstall() {
    // Add addons to package.json and run defaultBlueprint
    return this.addAddonsToProject({
      packages: [
        { name: 'semantic-ui-ember', target: '2.0.1' }
      ]
    })
    .then(() => {
      return this.addBowerPackagesToProject([
        { name: 'semantic-ui', target: '2.2.10' }
      ]);
    });
  }
};
