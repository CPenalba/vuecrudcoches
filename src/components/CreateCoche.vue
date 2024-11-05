<template>
  <div>
    <h1>Create Coche</h1>
    <h2>{{ mensaje }}</h2>
    <form v-on:submit.prevent="insertCoche()">
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
      <button class="btn btn-info">Insertar</button>
    </form>
  </div>
</template>

<script>
import ServiceCoche from "@/services/ServiceCoche";
const service = new ServiceCoche();

export default {
  name: "CreateCoche",
  methods: {
    insertCoche() {
      service.insertCoche(this.coche).then((result) => {
        this.mensaje = "Insertado correctamente " + result;
        this.$router.push("/");
      });
    },
  },
  data() {
    return {
      mensaje: "",
      coche: {
        idCoche: 0,
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
    };
  },
};
</script>

<style></style>
