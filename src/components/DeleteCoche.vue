<template>
  <div>
    <h1>Delete Coche</h1>
  </div>
</template>

<script>
import Swal from "sweetalert2"; // Import SweetAlert2
import ServiceCoche from "@/services/ServiceCoche";
const service = new ServiceCoche();

export default {
  name: "DeleteCoche",
  mounted() {
    let id = this.$route.params.id;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        service.deleteCoche(id).then((result) => {
          if (result.ok) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            this.$router.push("/");
          }
        });
      } else {
        this.$router.push("/");
      }
    });
  },
};
</script>

<style></style>
