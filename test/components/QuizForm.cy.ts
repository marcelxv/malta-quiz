import { setActivePinia, createPinia } from 'pinia'
import QuizForm from '../../components/QuizForm.vue'

describe('<QuizForm />', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(QuizForm)
  })
})
