import './OrderCatalogue.css';
import { useState } from 'react';

function ProductCatalog() {
  const [filterString1, setFilterString1] = useState('');
  const [isLoaded, setIsLoaded] = useState(true); // Assuming isLoaded state is initially true
  let products = {};
  return (
    <div>
      {/* <AppNavbar /> */}
      <div className='product-heading-container'>
        <input
          className='input-grey-rounded'
          type='text'
          placeholder='Search Product By Name, Description...'
          value={filterString1}
          onChange={(e) => setFilterString1(e.target.value)}
        />
      </div>
      {isLoaded && (
        <div className='product-catalog-container'>
          {products.map((product) => (
            <div className='product-card-container' key={product.product_id}>
              <h1
                className='product-tag'
                style={{
                  backgroundColor:
                    product.product_avg_rating > 2 ? '#ff7a5a' : 'green',
                }}
              >
                <i
                  className={
                    product.product_avg_rating > 2
                      ? 'fas fa-fire'
                      : 'fas fa-check-circle'
                  }
                ></i>
                {product.product_avg_rating > 2 ? 'Popular' : 'Trusted'}
              </h1>
              <img
                src={product.product_image}
                alt='Product'
                className='product-img'
              />
              <h1 className='product-title'>{product.product_title}</h1>
              <div className='rating-review'>
                <span className='badge text-bg-success'>
                  {product.product_avg_rating} <i className='fas fa-star'></i>
                </span>
                <p className='ratingscount'>
                  {product.product_rating_count} Ratings &{' '}
                  {product.product_review_count} Reviews
                </p>
              </div>
              <div className='price-container'>
                <p className='price-txt'>
                  Price:
                  <span className='currency'>{product.product_currency} </span>
                  <span className='underline-price'>
                    {product.product_old_price}
                  </span>
                  <span className='actual-price'>
                    {product.product_new_lesser_price}
                  </span>
                </p>
              </div>
              <button
                className='btn btn-warning'
                style={{ backgroundColor: '#ff7a5a' }}
                onClick={() =>
                  (window.location.href = `/product/details/${product.product_id}`)
                }
              >
                ORDER NOW
              </button>
            </div>
          ))}
        </div>
      )}
      {!isLoaded && <div>{/* Skeleton loaders */}</div>}
    </div>
  );
}

export default ProductCatalog;
