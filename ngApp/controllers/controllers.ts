namespace productsapp.Controllers {

    export class HomeController {
        public products;
        public product;

        public save() {
          this.productService.save(this.product).then(() => {
            this.products = this.productService.list();
            this.product = null;
          })
        }

        constructor(
          private productService:productsapp.Services.ProductService,
          private $state:ng.ui.IStateService,
          private $stateParams:ng.ui.IStateParamsService
        ) {
          this.products = productService.list();
          let productId = $stateParams['id'];
          this.product = productService.get(productId);
        }
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }
}
