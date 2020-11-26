
import React, { Component } from 'react';
import { Container, Content, Button, Text, Item, Label, Input, List, ListItem, Left, Right, Body, Title, Icon } from 'native-base';
import { StyleSheet, TextInput,  View, FlatList} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from 'react-native-elements';

export default class ForName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      data: undefined,
      value: undefined,
      isReady: false,
      buttonNext: false,
    };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handlerButton = this.handlerButton.bind(this);
    this.handlerText = this.handlerText.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  handleData() {
    this.setState({
      loading: false,
      error: null,
      data: undefined,
      value: undefined,
      isReady: true,
      buttonNext: false,
    });
    console.log(this.state);
  }

  peopleGetName = (name) =>
    new Promise((resolve, reject) => {
      fetch(`https://swapi.dev/api/people/?search=${name}`)
        .then((response) => {
          if (response.status != 404) return response.json();
          return false;
        })
        .then((json) => resolve(json));
    });

  peopleNext = () =>
    new Promise((resolve, reject) => {
      if (this.state.data.next) {
        this.setState({
          buttonNext: true,
        });
        fetch(this.state.data.next)
          .then((response) => {
            if (response.status != 404) return response.json();
            return false;
          })
          .then((json) => resolve(json));
      } else {
        this.setState({
          buttonNext: false,
        });
        return null;
      }
    });

  handlerText(e) {
    this.setState({ value: e });
  }

  handlerNext() {
    this.peopleNext().then((data) => {
      if (data.next) {
        this.setState({
          loading: true,
          data: data,
          buttonNext: true,
        });
      } else {
        this.setState({
          loading: true,
          data: data,
          buttonNext: false,
        });
      }
    });
  }

  handlerButton() {
    let name = this.state.value;
    this.peopleGetName(name).then((data) => {
      if (data.next) {
        this.setState({
          loading: true,
          data: data,
          buttonNext: true,
        });
      } else {
        this.setState({
          loading: true,
          data: data,
          buttonNext: false,
        });
      }
    });
  }

  render() {
    const { error, loading, data, value, isReady, buttonNext } = this.state;

    let button;

    if (buttonNext) {
      button = (
        <Button
          primary
          block
          style={{ marginTop: "2%" }}
          onPress={this.handlerNext}
          title="Consultar Api"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        >
          <Text>Siguiente</Text>
        </Button>
      );
    } else {
      button = (
        <Button
          block
          style={{ marginTop: "2%" }}
          color="#841584"
          onPress={this.handleData}
        >
          <Text>Volver a Buscar</Text>
        </Button>
      );
    }

    if (this.state.isReady == false) {
      return (
        <Container>
         <Header
            centerComponent={{ text: 'Search Name', style: { color: '#fff' } }}
            leftComponent={
              <Icon name="menu" onPress={() => navigation.openDrawer()} />
            }
          />
        <View>
          <Text>Cargando...</Text>
        </View>
        </Container>
       
        
      );
    } else if (!loading) {
      return (
        <Container>
          <Header
            centerComponent={{ text: 'Buscar', style: { color: '#fff' } }}
            leftComponent={
              <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
            } />
            
          

          <View style={styles.container}>
            <Item floatingLabel>
              <Label>Personaje</Label>
              <Input onChangeText={(text) => this.handlerText(text)} />
            </Item>
            <Button
              primary
              block
              style={{ marginTop: "2%" }}
              onPress={this.handlerButton}
              title="Consultar Api"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            >
              <Text>Buscar</Text>
            </Button>
          </View>
        </Container>
      );
    } else if (Array.isArray(data.results) && data.results.length != 0) {
      return (
        <Container>
           <Header
            centerComponent={{ text: 'Resultado', style: { color: '#fff' } }}
            leftComponent={
              <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
            }
           />
           

          <FlatList
            data={data.results}
            renderItem={({ item }) => {
              return (
                <ListItem itemDivider>
                  <Body style={{ marginRight: 0 }}>
                    <Text>{item.name}</Text>
                  </Body>
                </ListItem>
              );
            }}
            keyExtractor={(item) => item.name}
            stickyHeader
            Indices={this.state.stickyHeaderIndices}
          />

          {button}
        </Container>
      );
    } else {
      return (
        <Container>
          <Header
            centerComponent={{ text: 'Resultado', style: { color: '#fff' } }}
            leftComponent={
              <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
            }
           />
          
          <View style={styles.container}>
            <Text>No se encontraron datos</Text>
            {button}
          </View>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "25%",
  },
});
