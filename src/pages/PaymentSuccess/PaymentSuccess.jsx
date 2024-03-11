import './PaymentSuccess.css';
function PaymentSuccess() {
  return (
    <div className='payment-success-container'>
      <h1 className='success-container'>Order Placed</h1>
      <div className='bounce-animation'>
        <i className='fas fa-check-circle tick'></i>
      </div>
      <h1 className='mssg-container' style={{ paddingTop: '25px' }}>
        Hurrah! Your Order Is Placed.
      </h1>
      <h1 className='mssg-container'>Happy Shopping</h1>
      <button
        className='btn btn-success continueBtn'
        onClick={() => (window.location.href = '/')}
      >
        Continue to Shop
      </button>
    </div>
  );
}
