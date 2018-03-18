/**
 * Created by datdh on 16-Mar-18.
 */
import UnorderedList from './UnorderedList'
import DTextbox from './DTextbox'
import DTable from './DTable'

export default function registerComponents (Vue) {
  Vue.component(UnorderedList.name, UnorderedList)
  Vue.component(DTextbox.name, DTextbox)
  Vue.component(DTable.name, DTable)
}
