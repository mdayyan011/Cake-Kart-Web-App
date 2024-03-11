import React from 'react';
import './HomeCompo.css';
function App() {
  const isLoggedIn = true; // Assuming it's managed somewhere
  const cartQty = 3; // Example value for cart quantity
  const first_name = 'John'; // Example value for first name
  const imageUrl = 'https://example.com/image.jpg'; // Example value for image URL

  const logOut = () => {
    // Handle logout logic
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className='navbar-parent-container1'>
          <div className='btn-auth'>
            <div className='cart-icon'>
              <i className='fas fa-shopping-cart'></i>
              <span className='cart-count'>
                {cartQty != null ? cartQty : 0}
              </span>
              <p className='hello-txt'>
                {first_name == null ? 'Hello, User' : `Hello, ${first_name}`}
              </p>
              {imageUrl && imageUrl !== 'null' ? (
                <img src={imageUrl} alt='' className='dp-img' />
              ) : (
                <img
                  src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  alt=''
                  className='dp-img'
                />
              )}
            </div>
          </div>
          <div className='navbar-main-conatiner'>
            <div className='logo-container'>
              <p className='logo-txt'>
                Cake <span className='logo-second-part'> Kart </span>
              </p>
            </div>
            <div className='nav-links-container'>
              <div className='navItems'>HOME</div>
              <div className='navItems'>ABOUT</div>
              <div className='navItems'>PRODUCTS</div>
              <div className='navItems'>ORDERS</div>
              <div className='navItems'>CONTACT</div>
              <div className='btn-auth1'>
                <button className='btn btn-danger authBtn' onClick={logOut}>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='navbar-parent-container2'>
          <div className='navbar-main-conatiner'>
            <div className='logo-container'>
              <p className='logo-txt'>
                Cake <span className='logo-second-part'> Kart </span>
              </p>
            </div>
            <div className='nav-links-container'>
              <div className='navItems'>HOME</div>
              <div className='navItems'>ABOUT</div>
              <div className='navItems'>PRODUCTS</div>
              <div className='navItems'>ORDERS</div>
              <div className='navItems'>CONTACT</div>
              <div className='btn-auth'>
                <button
                  className='btn btn-success authBtn2'
                  style={{ marginRight: '15px' }}
                >
                  Sign In
                </button>
                <button className='btn btn-success authBtn2'>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='home-parent-container'>
        <div className='left'>
          <h1 className='logo-txt logo-txt-head'>Cake Kart</h1>
          <p className='love-txt'>Love at first bite</p>
          <br />
          <p className='love-txt1'>
            Unleash your sweetest dreams with our heavenly cup cakes!
          </p>
          <button className='getBtn'>Get Started</button>
        </div>
        <div className='right'>
          <img
            src={`../assets/pink_cupcake_ai-removebg-preview.png`}
            alt=''
            className='main-img'
          />
        </div>
      </div>
      <div className='icon-div'>
        <img
          src='./assets/pink_cupcake_ai-removebg-preview.png'
          alt=''
          className='icon-pink'
        />
        <img src='./assets/purple_ai.png' alt='' className='icon-blue' />
        <img
          src='./assets/chocoloate_cupcake.png'
          alt=''
          className='icon-chocoloate'
        />
      </div>
    </div>
  );
}

export default App;
