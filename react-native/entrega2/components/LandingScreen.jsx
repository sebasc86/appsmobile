import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Header } from 'react-native-elements';
import { Left, Right, Icon, Container } from 'native-base';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const LandingScreen = ({ navigation }) => {
  return (
    <Container >
    <Header
        centerComponent={{ text: 'LANDING', style: { color: '#fff' } }}
        leftComponent={
          <Icon name="menu" onPress={() => navigation.openDrawer()} />
        }
      />
    <View style={styles.container}>
       <Text>Pagina Home</Text>
      <Button
        title="Ir a buscar personajes"
        onPress={() => navigation.navigate("ForName")}
      />
    </View>
    </Container>
  );
};
 
export default LandingScreen;