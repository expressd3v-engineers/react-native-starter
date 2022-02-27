import React from "react";
import { View, Text, Button } from "react-native";
import CenterBox from "../components/styles/paper/center";

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
