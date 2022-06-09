/* eslint linebreak-style: ["error", "windows"] */

const ApplicationError = require('./ApplicationError');

class EmailAlreadyTakenError extends ApplicationError {
  constructor(email) {
    super(`${email} is already rented!!`);
    this.email = email;
  }

  static details() {
    return { email: this.email };
  }
}

module.exports = EmailAlreadyTakenError;
