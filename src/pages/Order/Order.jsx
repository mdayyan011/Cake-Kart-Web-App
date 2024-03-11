import './Order.css';
function Navbar({ isLoggedIn, cartQty, first_name, imageUrl, logOut }) {
  return (
    <div>
      {isLoggedIn && (
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
              <img
                src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                className='dp-img'
                alt=''
                style={{ display: imageUrl === 'null' ? 'block' : 'none' }}
              />
              <img
                src={imageUrl}
                alt=''
                className='dp-img'
                style={{ display: imageUrl !== 'null' ? 'block' : 'none' }}
              />
            </div>
          </div>
          <div className='navbar-main-conatiner'>
            <div className='logo-container'>
              <p className='logo-txt'>
                Cake
                <span className='logo-second-part'> Kart </span>
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
      )}
      {!isLoggedIn && (
        <div className='navbar-parent-container2'>
          <div className='navbar-main-conatiner'>
            <div className='logo-container'>
              <p className='logo-txt'>
                Cake
                <span className='logo-second-part'> Kart </span>
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
    </div>
  );
}
