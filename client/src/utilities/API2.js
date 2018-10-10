import axios from "axios";

export default {
    // Gets all drugs
    getInventories: function() {
      return axios.get("/api/inventory");
    },
    // Gets the drug with the given id
    getInventory: function(id) {
      return axios.get("/api/inventory/" + id);
    },
    // Deletes the drug with the given id
    deleteInventory: function(id) {
      return axios.delete("/api/inventory/" + id);
    },
    // Saves a drug to the database
    saveInventory: function(inventoryData) {
      return axios.post("/api/inventory", inventoryData);
    }
  };