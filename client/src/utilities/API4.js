import axios from "axios";


    
export default {
    // Gets all drugs
    getFdaDataValues: function() {
      return axios.get("/api/drug");
    },
    // Gets the drug with the given id
    // this chaining may not be available for functionality.
    getFdaDataValue: function(drugName){
        return axios.get("https://api.fda.gov/drug/label.json?search=openfda.brand_name:" + drugName), axios.post("/api/fda", drugName);
      },
  
    // Deletes the drug with the given id
    deleteDrug: function(id) {
      return axios.delete("/api/drug/" + id);
    },
    // Saves a drug to the database
    saveDrug: function(drugData) {
      return axios.post("/api/drug", drugData);
    }
  };

