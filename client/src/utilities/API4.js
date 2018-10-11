import axios from "axios";



export default {
    // Gets the drug with the given id
    // this chaining may not be available for functionality.
    getFdaDataValue: function (drugName) {
        return axios.get("https://api.fda.gov/drug/label.json?search=openfda.brand_name:" + drugName)
    },

    // Deletes the drug with the given id
    deleteFdaValue: function (id) {
        return axios.delete("/api/fda/" + id);
    },
    // Saves a drug to the database
    saveFromFdaToDrugs: function (fdaData) {
        return axios.post("/api/drugs", fdaData);
    },
    // Saves a FDA Data to the Fda database
    saveFromFdatoFda: function (fdaData) {
        return axios.post("/api/fda", fdaData);
    }
}
