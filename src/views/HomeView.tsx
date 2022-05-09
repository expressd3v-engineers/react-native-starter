import CenterBox from "components/styles/paper/center";
import React from "react";
import { Text, Button } from "react-native";

const HomeView = ({ navigation }: any) => {
  return (
    <CenterBox>
      <Text>Home</Text>
      <Button
        title="Sign In"
        onPress={() => {
          navigation.navigate("login");
        }}
      />
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("signup");
        }}
      />
    </CenterBox>
  );
};

export default HomeView;
