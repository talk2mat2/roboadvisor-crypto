class responseData {
  status = false;
  message = "";
  data = [];

  constructor(status, message, data) {
    this.data = data;
    this.message = message;
    this.status = status;
  }
}

module.exports = () => {
  return {
    responseData,
  };
};
