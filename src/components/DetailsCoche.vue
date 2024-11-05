<template>
  <div>
    <h1>Details Coche</h1>
    <router-link to="/">Back to list</router-link>
    <ul class="list-group" v-if="coche">
      <li class="list-group-item">ID: {{ coche.idCoche }}</li>
      <li class="list-group-item">MARCA: {{ coche.marca }}</li>
      <li class="list-group-item">MODELO: {{ coche.modelo }}</li>
      <li class="list-group-item">CONDUCTOR: {{ coche.conductor }}</li>
      <li class="list-group-item">
        IMAGEN: <img :src="coche.imagen" width="150px" height="150px" />
      </li>
    </ul>
  </div>
</template>

<script>
import ServiceCoche from "@/services/ServiceCoche";
const service = new ServiceCoche();

export default {
  name: "DetailsCoche",
  data() {
    return {
      coche: null,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    service.findCoche(id).then((result) => {
      this.coche = result;
    });
  },
};
</script>

<style></style>
