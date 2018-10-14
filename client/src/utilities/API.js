import axios from "axios";

export default {
    // Gets all drugs
    getDrugs: function() {
      return axios.get("/api/drug");
    },
    // Gets the drug with the given id
    getDrug: function(id) {
      return axios.get("/api/drug/" + id);
    },
    // Deletes the drug with the given id
    deleteDrug: function(id) {
      return axios.delete("/api/drug/" + id);
    },
    saveDrug: function(rxData) {
      console.log("rxData: " , rxData);
      
      return axios.post("/api/InputForm", rxData);
    },


  };

