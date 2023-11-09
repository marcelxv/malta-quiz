import Blog from './blog.vue'

describe('<Blog />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Blog)
  })
})
