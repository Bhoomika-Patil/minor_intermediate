// import * as React from 'react'; 
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { DrawerContent } from './navigation/screens/DrawerNavigator';
// import BottomTabNavigator from './navigation/screens/BottomTabNavigator';
// import HomeScreen from './navigation/screens/Home';
// import QuestionsScreen from './navigation/screens/Questions';
// import ProfileScreen from './navigation/screens/Profile';
// import Notifications from './navigation/screens/Notifications';
// import RateAppScreen from './navigation/screens/RateApp';
// import TimeTable from './navigation/screens/TimeTable';
// import Landing_1 from './navigation/Screens_new/Landing_1';
// import Login from './navigation/Screens_new/Login';
// import Signup from './navigation/Screens_new/Signup';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function HomeStackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
//       <Stack.Screen name="Questions" component={QuestionsScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="TimeTable" component={TimeTable} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// }

// function AuthStack() {
//   return (
//     <Stack.Navigator initialRouteName="Landing_1">
//       <Stack.Screen name="Landing_1" component={Landing_1} options={{ headerShown: false }} />
//       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//       <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
//       <Stack.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />

//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
//         <Drawer.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
//         <Drawer.Screen  name=" " component={HomeStackScreen}/>
//         <Drawer.Screen name="Profile" component={ProfileScreen} />
//         <Drawer.Screen name="Notifications" component={Notifications} />
//         <Drawer.Screen name="RateApp" component={RateAppScreen} />

//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// import * as React from 'react'; 
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator
// import { DrawerContent } from './navigation/screens/DrawerNavigator';
// import BottomTabNavigator from './navigation/screens/BottomTabNavigator';
// import HomeScreen from './navigation/screens/Home'; // Import HomeScreen
// import QuestionsScreen from './navigation/screens/Questions'; // Import QuestionsScreen
// // import Landing_1 from './navigation/Screens_new/Landing_1';
// // import Login from './navigation/Screens_new/Login';
// // import Signup from './navigation/Screens_new/Signup';

// // Import other screens
// import ProfileScreen from './navigation/screens/Profile';
// import Notifications from './navigation/screens/Notifications';
// import RateAppScreen from './navigation/screens/RateApp';
// import TimeTable from './navigation/screens/TimeTable';

// const Drawer = createDrawerNavigator(); // Create Drawer Navigator
// const Stack = createStackNavigator(); // Create Stack Navigator

// // Define a stack for screens related to Home navigation
// const HomeStack = createStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="HomeScreen" component={BottomTabNavigator} options={{ headerShown: false }} />
//       <HomeStack.Screen name="Questions" component={QuestionsScreen} options={{ headerShown: false }} />
//       <HomeStack.Screen name="TimeTable" component={TimeTable} options={{ headerShown: false }} />

//     </HomeStack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
      

//       <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
//         <Drawer.Screen  name=" " component={HomeStackScreen}/>
//         <Drawer.Screen name="Profile" component={ProfileScreen} />
//         <Drawer.Screen name="Notifications" component={Notifications} />
//         <Drawer.Screen name="RateApp" component={RateAppScreen} />
//       </Drawer.Navigator>
      
//     </NavigationContainer>
//   );
// }









import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './navigation/screens/DrawerNavigator';
import BottomTabNavigator from './navigation/screens/BottomTabNavigator';
import HomeScreen from './navigation/screens/Home';
import QuestionsScreen from './navigation/screens/Questions';
import ProfileScreen from './navigation/screens/Profile';
import Notifications from './navigation/screens/Notifications';
import RateAppScreen from './navigation/screens/RateApp';
import TimeTable from './navigation/screens/TimeTable';
import Landing_1 from './navigation/Screens_new/Landing_1';
import Login from './navigation/Screens_new/Login';
import Signup from './navigation/Screens_new/Signup';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Questions" component={QuestionsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TimeTable" component={TimeTable} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Landing_1">
      <Stack.Screen name="Landing_1" component={Landing_1} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        <Drawer.Screen  name=" " component={HomeStackScreen}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="RateApp" component={RateAppScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}