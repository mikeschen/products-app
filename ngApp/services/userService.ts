namespace productsapp.Services {

  export class UserService {
    private USER_RESOURCE = this.$resource('/api/login');
    public isLoggedIn;

    static $inject = ['$resource'];

    constructor(private $resource) {}

    public login(userName, password) {
      let users = this.getUser(userName, password);

      if (users) {
        this.isLoggedIn = true;
        return true;
      }
      return false;
    }

    private getUser(userName, password) {
      this.USER_RESOURCE.get({userName: userName, password: password});
    }
  }

  angular.module('productsapp').service('userService', UserService);
}
