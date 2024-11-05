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
}
