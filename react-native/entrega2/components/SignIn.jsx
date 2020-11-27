import React, {useEffect} from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Icon, Container, Button, Text } from 'native-base';
import { Header } from 'react-native-elements';
import * as Google from 'expo-google-app-auth';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';


 
const SignInScreen = ({navigation, isAuthenticated, setIsAuthenticated}) => {


    

    const [loaded] = useFonts({
      Starwars: require('../assets/fonts/Starwars.ttf'),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    
   
    
  
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
                <Text style={styles.text}>Iniciaste sesión</Text>
                <Text style={styles.text}>Correctamente</Text>
                    <Button
                        block
                        style={styles.button}
                        onPress={() => navigation.navigate("Home")}
                    >
                      <Text>
                        Ir al Home
                      </Text>
                    </Button>
                </View>
            )
        } else {
            view =(
                <View style={styles.container}>
                <Text style={styles.text}>Iniciar Sesion</Text>
                  <Button
                   block
                   style={styles.button}
                   accessibilityLabel="Learn more about this purple button"
                   onPress={() => handlerLogin()} >
                      <Text>
                        Ingresar
                      </Text>
                  </Button>
                </View>
            )
        }

     let header
      if(isAuthenticated){
        header = (
          <Header
          centerComponent={{ text: 'PERFIL', style: { color: '#fff' } }}
          leftComponent={
            <Icon name="menu" onPress={() => navigation.openDrawer()} />
          }
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around',
          }}
        />
      )
      } else {
        header =(
          <Header
            centerComponent={{ text: 'INICIAR SESSION', style: { color: '#fff' } }}
            leftComponent={
              <Icon name="menu" onPress={() => navigation.openDrawer()} />
            }
            containerStyle={{
              backgroundColor: '#3D6DCC',
              justifyContent: 'space-around',
            }}
        />
        )
      }

      if (loaded) {
         
        return (
          <Container >
            
        
            {header}
            <ImageBackground source={require('../photos/background.jpg')} style={styles.image}>
            {view}
            </ImageBackground>
          
          </Container>
        );
      } else{
        
        return (
          <Container>
            <View>
              <Text>...cargando</Text>
            </View>
          </Container>
        );
      }
 

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: "2%"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    text: {
      fontFamily: 'Starwars', 
      color: '#FFFFFF', 
      fontSize: 40
    },
    button: {
      marginTop: "10%", 
      backgroundColor: '#3D6DCC', 
      padding: '2%'
    }
  });
 
export default SignInScreen;

