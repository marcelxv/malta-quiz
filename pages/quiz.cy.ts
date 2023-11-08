import Quiz from './quiz.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('<Quiz />', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders', () => {
    cy.mount(Quiz, {
      props: {
        totalCorrect: 5,
        isFinished: false
      }
    })
  })
})
