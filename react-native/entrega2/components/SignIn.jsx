import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Left, Right, Icon, Container } from 'native-base';
import { Header } from 'react-native-elements';
import * as Google from 'expo-google-app-auth';


 
const SignInScreen = ({navigation, isAuthenticated, setIsAuthenticated}) => {


    async function handlerLogin() {
        try {
          const result = await Google.logInAsync({
            androidClientId: "605579952812-e8jpdeedtu3o33dmffv0i6h28qe8tsa0.apps.googleusercontent.com",
            scopes: ['profile', 'email'],
        })
            if (result.type === 'success') {
                  setIsAuthenticated(true)
                  console.log(isAuthenticated, logout)
                  return {isLogin: true}
        
          } else {
              return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        } 
    }
  
    
    let view;
         
        if(isAuthenticated){
            view = (
                <View style={styles.container}>
                <Text style={styles.text}>Iniciaste Sesion correctamente</Text>
                    <Button
                        title="Ir a Home"
                        onPress={() => navigation.navigate("Landing")}
                    />
                </View>
            )
        } else {
            view =(
                <View style={styles.container}>
                <Text>Iniciar Sesion</Text>
                  <Button title="Ingresar" onPress={() => handlerLogin()} />
                </View>
            )
        }

  return (
    <Container >
    <Header
        leftComponent={
          <Icon name="menu" onPress={() => navigation.openDrawer()} />
        }
      />
      <ImageBackground source={require('../photos/background.jpg')} style={styles.image}>
      {view}
      </ImageBackground>
    
    </Container>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    text: {
        color: '#FFFFFF',
        marginBottom: '10%',
        fontWeight: 'bold'
      },
  });
 
export default SignInScreen;

