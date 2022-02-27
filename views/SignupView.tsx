import React, { FC } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

const SignupView: FC = ({ navigation }: any) => {
  return (
    <View>
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
    </View>
  );
};

export default SignupView;
