import QuizProgress from '../../components/QuizProgress.vue'

describe('<QuizProgress />', () => {
  it('renders', () => {
    const totalCorrect = 5
    const totalQuestions = 10

    cy.mount(QuizProgress, {
      props: {
        totalCorrect,
        totalQuestions
      }
    })
  })
})
