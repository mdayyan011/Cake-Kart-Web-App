import './ProductDetail.css';
import { useState } from 'react';

function ProductDetail({ product, comments }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {
    // Logic to add product to cart
    setIsAddedToCart(true);
  };

  return (
    <div>
      {/* <AppNavbar /> */}
      <img src={product.product_image} alt='Product' className='product-img' />
      <div
        className='product-detail-main-container'
        style={{ marginTop: '2%' }}
      >
        <div className='product-container'>
          <h1 className='product-heading'>{product.product_title}</h1>
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
              <span className='currency'>{product.product_currency}</span>
              <span className='underline-price'>
                {product.product_old_price}
              </span>
              <span className='actual-price'>
                {product.product_new_lesser_price}
              </span>
            </p>
          </div>
          <div className='description-container'>
            <h1 className='desc-heading'>Description:</h1>
            <p className='desc-text'>{product.product_desc}</p>
          </div>
          <button
            type='button'
            className='btn btn-warning qtyBtn'
            style={{ backgroundColor: '#ff7a5a' }}
            onClick={decrement}
          >
            -
          </button>
          <input
            type='text'
            min='1'
            max='10'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            type='button'
            className='btn btn-warning qtyBtn'
            style={{ backgroundColor: '#ff7a5a' }}
            onClick={increment}
          >
            +
          </button>
          {!isAddedToCart && (
            <button
              type='button'
              className='btn btn-warning addToCartBtn'
              style={{ backgroundColor: '#ff7a5a' }}
              onClick={addToCart}
            >
              <i className='fas fa-shopping-cart'></i> ADD TO CART
            </button>
          )}
          {isAddedToCart && (
            <button
              type='button'
              className='btn btn-warning addToCartBtn'
              onClick={() => (window.location.href = '/cart/getAllCartItems')}
            >
              <i className='fas fa-shopping-cart'></i> GO TO CART
            </button>
          )}
          <div className='ratings-container'>
            <h1 className='ratings-heading'>Ratings & Reviews</h1>
            <p className='ratings-value'>
              {product.product_avg_rating}{' '}
              <i className='fas fa-star starIcon'></i>
            </p>
            <p className='ratingscount1'>
              {product.product_rating_count} Ratings &{' '}
              {product.product_review_count} Reviews
            </p>
          </div>
          {comments.map((comment, index) => (
            <div className='reviews-container' key={index}>
              <span className='badge text-bg-success'>
                {comment.number_star}
                <i className='fas fa-star'></i>
              </span>
              <div className='name-container'>
                <i>
                  <p>by {comment.customer_name}</p>
                </i>
                <i>
                  <p>
                    {comment.created_at_month}, {comment.created_at_year}
                  </p>
                </i>
              </div>
              <p className='comment-txt'>{comment.rating_review_comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
