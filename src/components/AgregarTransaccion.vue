<template>
    <div id = "agregarTransaccion">
    <h3>Agregar Transaccion</h3>
    <label for = "id" type="numeric">Id</label>
    <input v-model ="id" id="id">
    <label for = "fechaTransaccion">Fecha de Transacción</label>
    <input v-model ="fechaTransaccion" id="fecha" type= "date">
     <label for = "categoria">Categoría</label>
    <input v-model="categoria" id="categoria">
     <label for = "valor" type="numeric">Valor</label>
    <input v-model="valor" id="valor">
     <label for ="formaPago">Forma de Pago</label>
    <input v-model="formaPago" id="formaPago">
     <label for = "descripcion">Descripción</label>
    <input v-model="descripcion" id="descripscion">
    <button v-on:click="agregarTransaccion">Agregar Transacción</button>
    <p>El dato recibido fue{{datoRecibido}}</p>

</div>
</template>


<script>
import axios from "axios";

export default {
    name: "AgregarTransaccion",
    data: function(){
        return {

            id:"",
            fechaTransaccion:"",
            categoria:"",
            valor:"",
            formaPago:"",
            descripcion:"",
            datoRecibido :0
        };

    },

    methods:{

        mostrarId:function(){
            alert(this.id);

        },
        agregarTransaccion: function(){
           var datosJSON= {
                id:this.id,
                fechaTransaccion:this.fechaTransaccion,
                categoria:this.categoria,
                valor:this.valor,
                formaPago:this.formaPago,
                descripcion:this.descripcion
                
                
            };
            axios
                .post("https://planifinanzassprint2.herokuapp.com/transacciones/agregar/", datosJSON)
                .then(respuesta =>{
                    alert(respuesta.data.mensaje);

            })
            .catch(error =>{
                alert("Error en el servidor Hola");
            });

        }

    },
    created: function(){

        this.datoRecibido=this.$route.params.dato;
    //alert("Esto pasa antes de que se cree el componente agregar orden")

}


};

</script>

<style  scoped>
#agregarTransaccion{
    background-color: gray;


}

</style>