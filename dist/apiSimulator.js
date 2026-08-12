class NetworkError extends Error {
    constructor(message = "Network Error") {
        super(message);
        this.name = "Network Error";
    }
}
class DataError extends Error {
    constructor(message = "Unable to fetch data") {
        super(message);
        this.name = "Data Error";
    }
}
const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject(new NetworkError("Network Error: Failed to fetch product catalog"));
            }
        }, 1000);
    });
};
const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, productId: 1, rating: 5 },
                    { id: 2, productId: 1, rating: 4 },
                    { id: 3, productId: 2, rating: 3 },
                ]);
            }
            else {
                reject(new DataError(`Failed to fetch reviews for product ID ${productId}`));
            }
        }, 1500);
    });
};
const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { totalSales: 10000, unitsSold: 500, averagePrice: 20 },
                ]);
            }
            else {
                reject(new DataError("Failed to fetch sales report"));
            }
        }, 1000);
    });
};
export { NetworkError, DataError, fetchProductCatalog, fetchProductReviews, fetchSalesReport };
//# sourceMappingURL=apiSimulator.js.map