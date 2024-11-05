<template>
  <div>
    <h1>Update Coche</h1>
    <form v-on:submit.prevent="updateCoche()" v-if="coche">
      <label>Id coche: </label>
      <input
        type="number"
        v-model="coche.idCoche"
        class="form-control"
        disabled
      />
      <br />
      <label>Marca: </label>
      <input type="text" v-model="coche.marca" class="form-control" />
      <br />
      <label>Modelo: </label>
      <input type="text" v-model="coche.modelo" class="form-control" />
      <br />
      <label>Conductor: </label>
      <input type="text" v-model="coche.conductor" class="form-control" />
      <br />
      <label>Imagen: </label>
      <input type="text" v-model="coche.imagen" class="form-control" />
      <br />
      <button class="btn btn-info">Actualizar</button>
    </form>
  </div>
</template>

<script>
import ServiceCoche from "@/services/ServiceCoche";
const service = new ServiceCoche();

export default {
  name: "UpdateCoche",
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
  methods: {
    updateCoche() {
      service.updateCoche(this.coche).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
