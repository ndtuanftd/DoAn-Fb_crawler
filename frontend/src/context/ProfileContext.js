import React, { createContext } from 'react';
import { useState } from 'react';

const ProfileContext = createContext();
export default ProfileContext;

export const ToolProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const provided_data = {
    members: members,
    setMembers: setMembers,
    profiles: profiles,
    setProfiles: setProfiles,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
  };
  return (
    <ProfileContext.Provider value={provided_data}>
      {children}
    </ProfileContext.Provider>
  );
};
