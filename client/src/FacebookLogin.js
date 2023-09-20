import React from 'react';


window.fbAsyncInit = function() {
    window.FB.init({
      appId: '239029875760778',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v18.0'
    });
  };
const FacebookLoginComponent = () => {
    const handleFacebookLogin = () => {
        if (window.FB) {
            window.FB.login(
              response => {
                // Xử lý kết quả
              },
              { scope: 'public_profile,email' }
            );
          } else {
            console.error('SDK của Facebook chưa tải hoặc chưa khởi tạo.');
          }
      };
      
      return (
        <div>
          <button onClick={handleFacebookLogin}>Đăng nhập Facebook</button>
        </div>
      );
}
export default FacebookLoginComponent;
