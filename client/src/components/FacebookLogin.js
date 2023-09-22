// FacebookLoginComponent.js
import React from 'react';

window.fbAsyncInit = function() {
  window.FB.init({
    appId: '239029875760778', // Replace with your Facebook App ID
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v18.0'
  });
};

const FacebookLoginComponent = ({ setLoggedInWithFacebook }) => {
  const handleFacebookLogin = () => {
    if (window.FB) {
      window.FB.login(
        response => {
          if (response.authResponse) {
            // User logged in successfully
            setLoggedInWithFacebook(true);
          } else {
            console.error('User cancelled login or did not fully authorize.');
          }
        },
        { scope: 'public_profile,email' }
      );
    } else {
      console.error('SDK của Facebook chưa tải hoặc chưa khởi tạo.');
    }
  };

  return (
    <div>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
};

export default FacebookLoginComponent;
