import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | status-badge', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders different states', async function(assert) {

    await render(hbs`<ProjectInputVariables::List/>`);
  });
});
