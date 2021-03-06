---
title: Notas sobre Vue JS
date: 2021-03-04T00:03:33.633Z
description: Criando anotações de estudo sobre o vue js
---
## Basicao

### Referência

https://www.youtube.com/watch?v=4deVCNJq3qc

arquivo: https://jsfiddle.net/x0muLbsy/1/

HTML:

```html
<div id="root">
<!--   rendering data -->
  <h1>{{ greeting }}</h1>
<!-- v-model for two way bindig -->
  <input v-model="greeting">
<!-- v-if else-if else -->
  <div v-if=" count  === 2">
    Don't show
  </div>
  <div v-else-if=" count === 1">
    Show
  </div>
  <div v-else>
    ????        
  </div>
 <!-- Renders in display none --> 
  <div v-show="count === 2">
    Renders in display none
  </div>
 <!--  v-bind para mexer em attributos HTML e classes -->
  <h1>Email Form</h1>
  <input v-model="email" type="email" :class="{red: email.length < 2}">
<button onclick="alert('Vue > Angular')" v-bind:disabled="email.length < 2" >
    Submit
  </button>
  <!--  v-bind entr duas classes com array -->
  <small :class="[email.length < 2 ? 'blue' : 'green']">
     email é bacana
  </small>
  <!-- v-text e v-html para inserir os dados dentro dos elementos -->
  <p v-text="livro"></p>
  <div v-html="orelha"></div>
  <!-- v-once renderiza só uma vez como HTML estático -->
  <h3 v-once="estatico">
     {{ estatico }}
  </h3>
  <h3>
    {{ estatico }}
  </h3>
  <input type="text" v-model="estatico">
  <!-- fazendo loop -->
  <ul>
    <!-- array -->
    <h3>Cats</h3>
    <li v-for="cat in cats">{{ cat }}</li>
    <!-- objetos e filtros -->
    <h3>Dogs</h3>
    <!-- computed -->
      Novo dog com nome de gato: <b>{{ kittifyName }}</b>
    <li v-for="dog in dogs">{{ dog.name | capitalize }}</li>
    <!-- funções (métodos) -->
    <input type="text" v-model="newDog" v-on:keyup.enter="addDog">
    <button @click="addDog">+ADD</button>
  </ul>
  <!-- Chamando outro component -->
  <oncas-list :oncas="oncas" />
</div>
```

```javascript

Vue.component('oncas-list',{
props:['oncas'],
template:`
	<ul>
  	<li v-for="onca in oncas">{{ onca }}</li>
  </ul>
`
});

new Vue({
  el:'#root',
  component:[
  	'oncas-list'
  ],
  data: {
    greeting: 'Hello Vue',
    count: 3,
    email: '',
    livro: "Sou o livro do Jughead",
    orelha: "<small>orelha do livro</small>",
    estatico: "Aqui nao mudei",
    cats: ['kitkat','misha','tomzinho','maia','jade','amy'],
    dogs: [{name: 'gaia'}, {name: 'tobias'},{ name: 'gal'}],
    newDog: '',
    oncas: ['jaco','riozeira','mendes']
  },
  methods:{
		addDog: function(){
			this.dogs.push({name: this.newDog});
      this.newDog = '';
		}
	},
  computed:{
  	kittifyName: function(){
    	if(this.newDog.length > 1){
      	return this.newDog + 'y';
      }
    }
  },
  filters:{
  	capitalize: function(value){
    const firstLetter = value.slice(0,1).toUpperCase();
    return firstLetter + value.slice(1);
    }
  }
})



```
