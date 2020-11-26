import React, {Component} from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {View, StyleSheet} from "react-native";
import { Icon } from 'react-native-elements'


export class DrawerContentScreen extends Component {
    
  
    handlerConfiguration(){
        console.log("Configuration");
    }

    handlerLogout(){
        this.props.setIsAuthenticated(false)
    }

    render(){

        return(
            <View style={styles.container}>
                {this.props.isAuthenticated ? (
                <>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.topDrawer}>
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="home-outline" style={styles.icon}/>}
                            label="Home"
                            onPress={() => this.props.navigation.navigate("Landing")}
                        />
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="calendar" style={styles.icon}/>}
                            label="Perfil"
                            onPress={() => this.props.navigation.navigate("Sign In")}
                        />
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="calendar" style={styles.icon}/>}
                            label="Buscar Personajes"
                            onPress={() => this.props.navigation.navigate("ForName")}
                        />
                    </View>
                </DrawerContentScrollView>
                <View style={styles.bottomDrawer}>
                    {/* <DrawerItem 
                        icon={() => <Icon type="material-community" name="cogs" style={styles.icon}/>}
                        label="Configuration"
                        onPress={() => this.handlerConfiguration()}
                    /> */}
                    <DrawerItem 
                        icon={() => <Icon type="material-community" name="logout" style={styles.icon}/>}
                        label="Logout"
                        onPress={() => this.handlerLogout()}
                    />
                </View>
                </>
                ) : (
                    <>
                    <DrawerContentScrollView {...this.props}>
                    <View style={styles.topDrawer}>
                     
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="calendar" style={styles.icon}/>}
                            label="Login"
                            onPress={() => this.props.navigation.navigate("Sign In")}
                        />
                       
                        </View>
                    </DrawerContentScrollView>
                   
                </>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    icon:{
        color:'#517fa4'
    },
    topDrawer:{
        flex:1   
    },
    bottomDrawer: {
        flex:-1,
        justifyContent: 'flex-end',
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    }
});