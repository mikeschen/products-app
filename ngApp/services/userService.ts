namespace productsapp.Services {

  export class UserService {
    public login(userName, password) {
      if (userName === "mike" && password === "1234") {
        return true;
      }
      return false;
    }
  }

  angular.module('productsapp').service('userService', UserService);
}
