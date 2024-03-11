import './ReviewRating.css';

import { useState } from 'react';

function ProductDetail({ product }) {
  const [reviewText, setReviewText] = useState('');
  const [isAddedReview, setIsAddedReview] = useState(false);

  const handleRatingSelected = (rating, productId) => {
    // Handle rating selection
  };

  const addReview = (productId) => {
    // Logic to add review
    setIsAddedReview(true);
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
              <span className='currency'> {product.product_currency}</span>
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
          <div className='custom-review-container'>
            <h1 className='ratings-heading'>Add Rating & Review</h1>
            <app-star-rating
              ratingSelected={(rating) =>
                handleRatingSelected(rating, product.product_id)
              }
            />
            <div className='review-container'>
              <p className='review-txt'>Give Review</p>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder='Write your review here...'
                className='review-textarea'
              ></textarea>
            </div>
            <button
              className='btn btn-success reviewBtn'
              onClick={() => addReview(product.product_id)}
            >
              Add Review
            </button>
          </div>
          {isAddedReview && (
            <div
              className='alert alert-success alert-dismissible popAnimate fade show'
              role='alert'
            >
              <strong>Rating & Review Added Successfully</strong>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='alert'
                aria-label='Close'
                style={{ color: 'white' }}
              ></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
