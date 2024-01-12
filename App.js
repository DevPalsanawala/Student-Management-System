import React, { useState, useEffect } from "react";

import Splash from "./Screens/Splash";
import Home from "./Screens/Home";
import Login from "./Infoscreens/Login";
import Students from "./Infoscreens/Students";
import Timetable from "./Infoscreens/Timetable";
import Event from "./Infoscreens/Event";
import Broadcast from "./Infoscreens/Broadcast";
import School from "./Infoscreens/School";
import Stulogin from "./Infoscreens/Stulogin";
import Adminpage from "./Infoscreens/adminlogin";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Displaystu from "./Infoscreens/Displaystu";
import AddStudata from "./Infoscreens/AddStudata";
import Displayteacher from "./Infoscreens/DisplayTeacher";
import AddTeacher from "./Infoscreens/AddTeacher";
import Distech from "./Infoscreens/Distech";
import Displaybcast from "./Infoscreens/Displaybcast";
import Profile from "./Infoscreens/Profile";



const Stack = createNativeStackNavigator();
const App = () => {
  // pagedata = {};
  const [show, setshow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshow(false);
    }, 2000)
  }, [])
  return (
    // <Splash />
    // <Login />

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#66CCFF',
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "700",
            // fontFamily: FontFamily.Font["Helvetica"],
          },
          headerShown: false,
          orientation: "all",
          animation: "slide_from_right"
        }}>
        {
          show ? <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          /> :
            null
        }
        <Stack.Screen
          name="Home"
          component={Home}
        // options={{ animation: "slide_from_bottom" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Stulogin"
          component={Stulogin}
        />

        <Stack.Screen
          name="Adminpage"
          component={Adminpage}
        />

        <Stack.Screen
          name="Students"
          component={Students}
        />

        <Stack.Screen
          name="Timetable"
          component={Timetable}
        />

        <Stack.Screen
          name="Event"
          component={Event}
        />

        <Stack.Screen
          name="Broadcast"
          component={Broadcast}
        />

        <Stack.Screen
          name="School"
          component={School}
        />

        <Stack.Screen
          name="Displaystu"
          component={Displaystu}
        />

        <Stack.Screen
          name="AddStudata"
          component={AddStudata}
        />

        <Stack.Screen
          name="Displayteacher"
          component={Displayteacher}
        />

        <Stack.Screen
          name="AddTeacher"
          component={AddTeacher}
        />

        <Stack.Screen
          name="Distech"
          component={Distech}
        />

        <Stack.Screen
          name="Displaybcast"
          component={Displaybcast}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
        />

      </Stack.Navigator>
    </NavigationContainer>


  );
  // setpagedata = (dataname, data) => {
  //   pagedata[dataname] = data;
  // }
  // getpagedata = () => {
  //   return pagedata;
  // }

}
export default App