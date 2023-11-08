import ResultSummary from '../../components/ResultSummary.vue'

describe('<ResultSummary />', () => {
  it('renders', () => {
    const userPoints = 5

    cy.mount(ResultSummary, {
      props: {
        userPoints
      }
    })
  })
})
