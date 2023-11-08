import RedirectButton from '../../components/RedirectButton.vue'

describe('<RedirectButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(RedirectButton)
  })
})
