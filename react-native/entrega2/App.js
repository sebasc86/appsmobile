import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import ForName from './components/ForName';
import LandingScreen from './components/LandingScreen';
import SignInScreen from './components/SignIn';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContentScreen} from "./components/DrawerContentScreen";


const Drawer = createDrawerNavigator();
const image = { uri: "https://reactjs.org/logo-og.png" };

 

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);    


  
    return (
      <NavigationContainer>
        
        <Drawer.Navigator
          initialRouteName="Landing"
          headerMode={"none"}
          drawerContent={(props) => <DrawerContentScreen {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}
        >
          {isAuthenticated ? (
            <>
            <Drawer.Screen name="Landing" component={LandingScreen} />
            <Drawer.Screen name="Sign In">
              {(props) => <SignInScreen {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
            </Drawer.Screen>
            <Drawer.Screen name="ForName" component={ForName}/>
            
            </>
            
            
          ) : (
            <>
              
              <Drawer.Screen name="Sign In">
              {(props) => <SignInScreen {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
              </Drawer.Screen>
              
            </>
          )}
        
          
         
        </Drawer.Navigator>
        
      </NavigationContainer>
    );



  
};


 
export default App;