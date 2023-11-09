import { setActivePinia, createPinia } from 'pinia'
import Quiz from '../../pages/quiz.vue'

describe('<Quiz />', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders', () => {
    cy.mount(Quiz, {
      props: {
        totalCorrect: 5,
        isFinished: false
      },
      setup () {
        return {
          useSeoMeta: {
            title: 'title',
            description: 'description',
            image: 'image',
            url: 'url'
          }
        }
      }
    })
  })
})
