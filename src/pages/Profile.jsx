import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import UserInfo from '../components/Profile/UserInfo';
import EditInfo from '../components/Profile/EditInfo';
import "../styles/ProfileStyle/Profile.css"
import RotinaForm from '../components/Routine/RotineForm';
import RoutineList from '../components/Routine/RotineList';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="profile-page">
      <div className='profile-box'>
        {editMode ? (
          <EditInfo
            user={user}
            onSave={(editedUser) => {
              setUser(editedUser);
              setEditMode(false);
            }}
          />
        ) : (
          <UserInfo user={user} onEdit={() => setEditMode(true)} />
        )}
        <RotinaForm />
      </div>
      <RoutineList />
    </div>
  );
};

export default Profile;
