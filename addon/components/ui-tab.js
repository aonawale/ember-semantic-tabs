import get from 'ember-metal/get';
import computed from 'ember-computed';
import Component from 'ember-component';
import { PropTypes } from 'ember-prop-types';
import layout from '../templates/components/ui-tab';

export default Component.extend({
  layout,
  tagName: 'a',
  classNames: ['item'],
  classNameBindings: ['isSelected:active'],

  propTypes: { //eslint-disable-line
    text: PropTypes.string,
    id: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
  },

  isSelected: computed('id', 'selectedTab', function() {
    return get(this, 'id') === get(this, 'selectedTab');
  }),

  click() {
    this.onSelect && this.onSelect(get(this, 'id'));
  }
});
