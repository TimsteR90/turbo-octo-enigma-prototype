export class Product {

    private barcode: string;                //id
    private product_name: string;           //id
    private productcategory_name: string;
    private expiration_date: Date;
    private is_shown: boolean;
    private is_deleted: boolean;

    constructor(barcode: string, product_name: string, productcategory_name: string, expiration_date: Date) {
        this.barcode = barcode;
        this.product_name = product_name;
        this.productcategory_name = productcategory_name;
        this.expiration_date = expiration_date;
        this.is_shown = true;
        this.is_deleted = false;
    }

    get getProductcategoryName(): string {
        return this.productcategory_name;
    }
}