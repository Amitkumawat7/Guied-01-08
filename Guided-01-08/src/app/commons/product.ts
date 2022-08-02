export class Product {

    constructor(
        public productid: number,
        public productname: string,
        public desciption: string,
        public unit_price: number,
        public imageurl: string,
        public unitsinstock: number,
        public price: number,
        public datecreated: Date,
        public lastUpdated: Date,
        public categoryId: number

    ) { }
}
