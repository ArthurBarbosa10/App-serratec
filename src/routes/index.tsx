import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login.tsx";
import Shop from "../screens/shop.tsx";

const Stack = createNativeStackNavigator();


export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

    <Stack.Screen
        name="Shop"
        component={Shop}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    )

  }