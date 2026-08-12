import { fetchProductCatalog, fetchProductReviews, fetchSalesReport, NetworkError, DataError } from './apiSimulator.js';
function retryPromise(asyncFunction, retries, delay) {
    return asyncFunction().catch((error) => {
        if (retries > 0) {
            console.log(`API call failed, retrying in ${delay} ms (${retries} attempts left)`);
            return new Promise((resolve) => setTimeout(resolve, delay)).then(() => retryPromise(asyncFunction, retries - 1, delay));
        }
        return Promise.reject(error);
    });
}
retryPromise(fetchProductCatalog, 3, 1000)
    .then((products) => {
    console.log('Product Catalog:', products);
    const reviews = products.map(product => retryPromise(() => fetchProductReviews(product.id), 3, 1000));
    return Promise.all(reviews);
})
    .then((allReviews) => {
    console.log('Product Reviews:', allReviews);
    return retryPromise(fetchSalesReport, 3, 1000);
}).then((salesReport) => {
    console.log('Sales Report:', salesReport);
})
    .catch((error) => {
    if (error instanceof NetworkError) {
        console.error('Network error: Please check your connection.', error.message);
    }
    else if (error instanceof DataError) {
        console.error('Data error: API did not return data.', error.message);
    }
    else {
        console.error('Unknown error: ', error);
    }
})
    .finally(() => {
    console.log('All API calls have been attempted.');
});
//# sourceMappingURL=index.js.map