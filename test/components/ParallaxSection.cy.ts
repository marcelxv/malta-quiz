import ParallaxSection from '../../components/ParallaxSection.vue'

describe('<ParallaxSection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ParallaxSection)
  })
})
