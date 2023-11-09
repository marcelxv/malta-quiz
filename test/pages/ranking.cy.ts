import Ranking from '../../pages/ranking.vue'

describe('<Ranking />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Ranking, {
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
