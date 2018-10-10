import axios from "axios";

export default {
    // Gets all drugs
    getContacts: function() {
      return axios.get("/api/contact");
    },
    // Gets the drug with the given id
    getContact: function(id) {
      return axios.get("/api/contact/" + id);
    },
    // Deletes the drug with the given id
    deleteContact: function(id) {
      return axios.delete("/api/contact/" + id);
    },
    // Saves a drug to the database
    saveContact: function(contactData) {
      return axios.post("/api/contact", contactData);
    }
  };

