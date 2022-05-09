import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigation from "navigations/auth";
import AppNavigation from 'navigations/app';

const MainNavigation = () => {
  const [isAuth, setIsAuth] = useState(true)

  return (
    <NavigationContainer>
      {
        isAuth ?
          <AuthNavigation/>:
          <AppNavigation/>
      }
    </NavigationContainer>
  );
};

export default MainNavigation;