import Index from '../../pages/index.vue'

describe('<Index />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Index, {
      // useSeoMeta mock
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
