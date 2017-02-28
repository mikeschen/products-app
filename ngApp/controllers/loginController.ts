namespace productsapp.Controllers {
	export class LoginController {

		public userName;
		public password;

		constructor(private userService, private $state) {}

		public login() {
			if(this.userService.login(this.userName, this.password)) {
				this.$state.go('about');
			} else {
				console.log("error");
			}
		}
	}
}
