export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;

    // calcalateDiscount(percent: number): number;
}

export class Product implements IProduct{
    
    constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public releaseDate: string,
        public description: string,
        public price: number,
        public starRating: number,
        public imageUrl: string
    ){}

    // calcalateDiscount(percent: number): number {
    //     return percent;
    // }
}