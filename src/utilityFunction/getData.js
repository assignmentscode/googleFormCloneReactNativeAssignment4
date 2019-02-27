const axios = require('axios');

const getData = url => axios.get(url);
// getData('http://localhost:8080/formNames').then(response => console.log(response.data));
module.exports = getData;
