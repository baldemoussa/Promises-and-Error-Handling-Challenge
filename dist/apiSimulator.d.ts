declare class NetworkError extends Error {
    constructor(message?: string);
}
declare class DataError extends Error {
    constructor(message?: string);
}
declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: number;
}[]>;
declare const fetchProductReviews: (productId: number) => Promise<{
    id: number;
    productId: number;
    rating: number;
}[]>;
declare const fetchSalesReport: () => Promise<{
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}[]>;
export { NetworkError, DataError, fetchProductCatalog, fetchProductReviews, fetchSalesReport };
//# sourceMappingURL=apiSimulator.d.ts.map