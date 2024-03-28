import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { sessionHelper } from "../../utils/sessionHelper/sessionHelper";

const HomePage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const profile = searchParams.get("profile");
    if (profile) {
      const userProfile = JSON.parse(decodeURIComponent(profile));
      sessionHelper.setUserData(userProfile);
      window.location.href = "/";
    }
  }, [searchParams]);
  return (
    <div>
      <h1>Welcome to {sessionHelper.getUserData()?.name}</h1>
    </div>
  );
};

export default HomePage;
