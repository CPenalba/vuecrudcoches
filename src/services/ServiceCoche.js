import Global from "@/Global";

export default class ServiceCoche {
  getCoches() {
    return new Promise(function (resolve) {
      let coches = [];
      let request = "api/coches";
      let url = Global.urlApiCoches + request;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          coches = data;
          resolve(coches);
        });
    });
  }

  insertCoche(coche) {
    return new Promise(function (resolve) {
      let request = "api/Coches/InsertCoche";
      let url = Global.urlApiCoches + request;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coche),
      })
        .then((response) => response.json())
        .then(() => {
          resolve(coche);
        });
    });
  }

  findCoche(id) {
    return new Promise(function (resolve) {
      let request = "api/Coches/FindCoche/" + id;
      let url = Global.urlApiCoches + request;
      let coche = {};
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          coche = data;
          resolve(coche);
        });
    });
  }

  updateCoche(coche) {
    return new Promise(function (resolve) {
      let request = "api/Coches/UpdateCoche";
      let url = Global.urlApiCoches + request;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coche),
      })
        // .then((response) => response.json())
        .then(() => {
          resolve(coche);
        });
    });
  }

  deleteCoche(id) {
    return new Promise(function (resolve) {
      let request = "api/Coches/DeleteCoche/" + id;
      let url = Global.urlApiCoches + request;

      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        resolve(response);
      });
    });
  }
}
