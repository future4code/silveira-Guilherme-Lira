import React, { useState } from 'react'
import Profile from "./components/Profile/Profile";
import styledComponents from 'styled-components';

export default function App() {

  const [profile, setProfile] = useState()

  return (
    <div className="App">
      <Profile
        profile={profile}
        setProfile={setProfile}
      />
    </div>
  );
}
