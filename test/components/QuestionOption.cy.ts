import QuestionOption from '../../components/QuestionOption.vue'

describe('<QuestionOption />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(QuestionOption, {
      props: {
        text: 'Mario'
      }
    })
  })
})
