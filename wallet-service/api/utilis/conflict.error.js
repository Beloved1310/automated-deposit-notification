class ConflictError extends Error {
    constructor(message) {
      super(message);
      this.name = "ConflictError";
      this.message = message;
      this.status = 409;
    }
  }
  
  module.exports = ConflictError;
  