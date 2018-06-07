<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-on:click="say(1)">Essential Links</h2>
    <ul>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <child1 :msg="img" ></child1>

  </div>
</template>

<script>

import child1 from './child1.vue';
export default {
  name: 'test',
  components: {  
      child1: child1  
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      img:[{
        data:'1.jpg',
        class:'top'
      },{
        data:'2.jpg',
        class:'front'
      },{
        data:'3.jpg',
        class:'bottom'
      },{
        data:'3.jpg',
        class:'bottom'
      }]
    }
  },
  methods: {
    say: function (message) {
      alert(message)
      this.msg=message
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
