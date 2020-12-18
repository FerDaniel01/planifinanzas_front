<template>
    <div>
        <h2>Información de todas las Transacciones</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Fecha de Transacción</th>
                <th>Categoría</th>
                <th>Valor</th>
                <th>Forma de Pago</th>
                <th>Descripción</th>

            </tr>
              <tr v-for="transaccion in transacciones" v-bind:key="transaccion.id">
                <td>{{transaccion.id}}</td>
                <td>{{transaccion.fechaTransaccion}}</td>
                <td>{{transaccion.categoria}}</td>
                <td>{{transaccion.valor}}</td>
                <td>{{transaccion.formaPago}}</td>
                <td>{{transaccion.descripcion}}</td>

            </tr>
            

        </table>

    </div>
</template>

<script>
import axios from "axios";
export default {
    
    name: "verTransacciones",
    data: function(){
        return{
            transacciones:[
         
            
            ]

        };



    },
    beforeCreate: function (){
        axios
        .get("https://planifinanzassprint2.herokuapp.com/transacciones/")
        .then(respuesta=>{
            this.transacciones=respuesta.data;
        })
        .catch(error=>{
            console.log(error);
            alert("Error en la peticion con codigo"+ error.response.status);

        });
    }
    
};
</script>

<style scoped>

</style>