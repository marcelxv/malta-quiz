import QuestionItem from '../../components/QuestionItem.vue'

describe('<QuestionItem />', () => {
  it('renders', () => {
    const question = {
      id: 1,
      text: 'Who is the best front-end developer?',
      options: ['Mario', 'Luigi', 'Peach', 'Pink Gold Peach'],
      answer: 'Pink Gold Peach'
    }

    cy.mount(QuestionItem, {
      props: {
        questionNumber: 0,
        totalQuestions: 10,
        renderedQuestion: question
      }
    })
  })
})
