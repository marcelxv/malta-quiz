import QuizResults from '../../components/QuizResults.vue'

describe('<QuizResults />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(QuizResults)
  })
})
