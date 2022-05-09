import { createStackNavigator } from "@react-navigation/stack";
import {Fragment} from "react";
import MainNavigation from "./src/navigations/main";


const Stack = createStackNavigator();

export default function App() {
  return (
    <Fragment>
      <MainNavigation/>
    </Fragment>
  );
}
