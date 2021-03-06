import Ember from 'ember'
import layout from '../templates/components/nav-modal'
import computed from 'ember-computed-decorators'
const {
  Component,
  inject: {
    service
  },
  computed: {
    alias
  },
  set,
  A: EmberArray
} = Ember

export default Component.extend({
  frostNavigation: service(),
  classNames: [
    'nav-modal'
  ],
  layout,
  hook: 'frost-nav-modal',
  activeCategory: alias('frostNavigation._activeCategory'),

  @computed('frostNavigation.categories', 'activeCategory')
  columns (categories = EmberArray(), activeCategory) {
    return !activeCategory
      ? null
      : (() => {
        const category = categories.find(cat => cat.name === activeCategory)
        return category ? category.columns : null
      })()
  },
  actions: {
    setView (section) {
      set(this, 'showActions', true)
      set(this, 'content', section)
    }
  }
})
