import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Full Name: {user.fullName}</p>
          <p>Birthdate: {user.birthdate}</p>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phoneNumber}</p>
          <p>Citizen ID: {user.citizenId}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;