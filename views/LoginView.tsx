import React, { FC } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

const LoginView: FC = ({ navigation }: any) => {
  return (
    <View>
      <Text>Sign Up or Sign In:</Text>
      <View>
        <TextInput placeholder="email" autoCapitalize="none" />
      </View>
      <View>
        <TextInput placeholder="password" secureTextEntry />
      </View>
      <Button title="Sign In" onPress={() => {}} />
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("signup");
        }}
      />
    </View>
  );
};

export default LoginView;
