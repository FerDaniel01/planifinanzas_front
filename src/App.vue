<template>
  <div id="app">
   
    <h1>Planifinanzas - Modulo de Transacciones</h1>
    <nav>
      <button v-on:click="cambiarTransacciones">transanciones</button>
      <button v-on:click="cambiarAgregarTransaccion">Agregar Transaccion</button>
      <h2>{{nombre}}</h2>
      
      <router-view></router-view>
    </nav>

    
    

  </div>
</template>

<script>
import AgregarTransaccion from "./components/AgregarTransaccion";
import VerTransacciones from "./components/VerTransacciones";

export default {
  name: 'App',
  components: {AgregarTransaccion, VerTransacciones},
  data:function(){
    return{
      nombre:2

    };

  },
  methods: {
    holaMundo: function(){
      this.nombre++;
    }, 

    cambiarTransacciones: function(){
      if(this.$route.name !="verTransacciones"){
      this.$router.push({name : "verTransacciones"});
      }
    },

    cambiarAgregarTransaccion: function(){
      if(this.$route.name != "agregar"){
      this.$router.push({
        name:"agregar",
        params:{dato:"5"}
        });
      }
    }
  },
    beforeCreate: function (){

    
    if(this.$route.name != "verTransacciones"){
    this.$router.push({name:"verTransacciones"});
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
