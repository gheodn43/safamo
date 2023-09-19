import React from 'react';
import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
// import { Switch, Route } from 'react-router-dom'; // Import Switch và Route

const FacebookLoginComponent = () => {
  const [profile, setProfile] = useState(null);

  return (
    // <Switch> {/* Sử dụng Switch để bọc các Route */}
      // <Route exact path="/">
        <div>
          {!profile ? (
            <LoginSocialFacebook
              appId={process.env.REACT_APP_FACEBOOK_APP_ID}
              onResolve={(response) => {
                console.log(response);
                setProfile(response.data);
              }}
              onReject={(error) => {
                console.log(error);
              }}
            >
              <FacebookLoginButton />
            </LoginSocialFacebook>
          ) : (
            ""
          )}

          {profile ? (
            <div>
              <h1>{profile.name}</h1>
              <img src={profile.picture.data.url} alt={profile.name} />
            </div>
          ) : (
            ""
          )}
        </div>
      // </Route>
    // </Switch>
  );
};

export default FacebookLoginComponent;
