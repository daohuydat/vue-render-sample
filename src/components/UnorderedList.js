/**
 * Created by datdh on 16-Mar-18.
 */
// import '@/style/unordered-list.scss'

export default {
  name: 'unordered-list',
  render (h) {
    if (this.items && this.items.length) {
      return h('ul', {
        class: {
          'red-content': true,
          'underline-content': false
        },
        attrs: {
          id: 'foo',
          'data-desc': 'This is the unordered list.'
        }
      },
      this.items.map(item => {
        return h('li', {
          style: {
            fontSize: '20px'
          }
        }, item)
      })
      )
    }
    return h('p', 'No item.')
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  created () {
    console.log('Unordered list was created!')
  }
}
