/**
 * Created by datdh on 16-Mar-18.
 */
export default {
  name: 'd-textbox',
  methods: {
    getTagName () {
      return 'input'
    },
    getTagData () {
      const self = this
      return {
        domProps: {
          value: self.value
        },
        on: {
          input (event) {
            self.value = event.target.value
            self.$emit('input', event.target.value)
          }
        }
      }
    }
  },
  props: ['value'],
  render (h) {
    return h(this.getTagName(), this.getTagData())
  }
}
