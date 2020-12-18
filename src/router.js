import VueRouter from 'vue-router';
import AgregarTransaccion from "./components/AgregarTransaccion";
import VerTransacciones from "./components/VerTransacciones";

const router = new VueRouter({
//mode: "history",
    routes :[

        {
            name: "agregar",
            path: "/agregar",
            component: AgregarTransaccion

        },
        {
            name: "verTransacciones",
            path: "/ver",
            component: VerTransacciones

    }
    ] 

});
export default router;