/**
 * Created by datdh on 18-Mar-18.
 */
export default {
  name: 'd-table',
  created () {
    console.log(this.headers)
    console.log(this.items)
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    getTagData () {
      return {}
    },
    getTagChildren (h) {
      return [this.getTableHeader(h), this.getTableBody(h)]
    },
    getTableHeader (h) {
      return h('thead', [h('tr', this.genTableHeaderContent(h))])
    },
    genTableHeaderContent (h) {
      return this.headers.map(header => {
        return h('th', header.text)
      })
    },
    genTableRowContent (h, headers, item) {
      return headers.map(header => {
        return h('td', item[header.key])
      })
    },
    genTableBody (h) {
      const headers = this.headers
      return this.items.map(item => {
        return h('tr', this.genTableRowContent(h, headers, item))
      })
    },
    getTableBody (h) {
      return h('tbody', this.genTableBody(h))
    }
  },
  render (h) {
    return h('table', this.getTagData(), this.getTagChildren(h))
  }
}
