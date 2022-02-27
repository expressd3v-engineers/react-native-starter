import React, { FC } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import CenterBox from "../components/styles/paper/center";

const SignupView: FC = ({ navigation }: any) => {
  return (
    <CenterBox>
      <Text>Sign Up</Text>
      <View>
        <TextInput placeholder="email" autoCapitalize="none" />
      </View>
      <View>
        <TextInput placeholder="password" secureTextEntry />
      </View>
      <Button
        title="Sign In"
        onPress={() => {
          navigation.navigate("login");
        }}
      />
      <Button title="Sign Up" onPress={() => {}} />
    </CenterBox>
  );
};

export default SignupView;
