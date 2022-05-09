import React, { FC } from "react";
import { View, Text, TextInput, Button} from "react-native";
import CenterBox from "components/styles/paper/center";

const LoginView: FC = ({ navigation }: any) => {
  return (
    <CenterBox>
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
    </CenterBox>
  );
};

export default LoginView;
