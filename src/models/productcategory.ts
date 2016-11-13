import { Product } from './product';

export class Productcategory {

    private productcategory_name: string; //_id
    private product_list: Array<Product>;
    private is_shown: boolean;
    private is_deleted: boolean;

    constructor(productcategory_name: string) {
        this.productcategory_name = productcategory_name;
        this.product_list = new Array<Product>();
        this.is_shown = true;
        this.is_deleted = false;
    }

    add_product(product: Product) {
        this.product_list.push(product);
    }

    remove_product(product: Product) {
        for(let i = 0; i < this.product_list.length; i++) {
            if(this.product_list[i] == product) {
                this.product_list.splice(i, 1);
            }
        }
    }
}