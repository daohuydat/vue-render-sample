<template>
  <div class="hello-world">
    <unordered-list :items="listData">
    </unordered-list>
    <hr />
    <d-textbox v-model="msg"/>
    <p> Msg: {{msg}}</p>
    <hr />
    <d-table :headers="tableHeaders" :items="tableItems"></d-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      listData: ['Dao Huy Dat', 'Bui Vinh Dat', 'Do Xuan Viet'],
      tableHeaders: [
        {text: 'Id', key: 'id'},
        {text: 'Name', key: 'name'},
        {text: 'Age', key: 'age'}
      ],
      tableItems: [
        {id: 1, name: 'Dao Huy Dat', age: 1112},
        {id: 2, name: 'Nguyen Manh Truong', age: 8112},
        {id: 3, name: 'Tran Van Can', age: 1912}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
