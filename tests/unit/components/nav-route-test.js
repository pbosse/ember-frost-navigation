import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'

describeComponent(
  'nav-route',
  'NavRouteComponent',
  {
    // Specify the other units that are required for this test
    needs: ['helper:hook'],
    unit: true
  },
  function () {
    it('renders', function () {
      // creates the component instance
      let component = this.subject()
      // renders the component on the page
      this.render()
      expect(component).to.be.ok
      expect(component.getDefaultProps()).to.be.a('object')

      expect(this.$()).to.have.length(1)
    })
  }
)
