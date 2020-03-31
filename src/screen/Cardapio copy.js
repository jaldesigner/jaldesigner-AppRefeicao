import React, {Component} from 'react';
import {Text, View, Picker, ImageBackground} from 'react-native';

import styles from '../style/styleCardapio';
export default class Cardapio extends Component {
  constructor() {
    super();
    this.state = {selectPrato: ''};
  }
  Show = value => {
    alert(value);
    this.setState({selectPrato: value});
  };
  render() {
    return (
      <View style={styles.countainer}>
        <View>
          <ImageBackground
            source={require('../img/Header_Homer.png')}
            style={styles.headerCardapio}>
            <Text style={styles.txtHeader}>Cardápio</Text>
          </ImageBackground>
        </View>
        <View style={{}}>
          <Picker
            selectedValue={this.state.selectPrato}
            onValueChange={this.Show.bind()}>
            <Picker.Item
              label="Frango a Parmegiana"
              value="frangoAParmegiana"
            />
            <Picker.Item label="Bife com Fritas" value="bifeComFritas" />
            <Picker.Item
              label="Estrogonofre de frango"
              value="strogonofreDeFrango"
            />
          </Picker>
          <Text>{}</Text>
        </View>
      </View>
    );
  }
}
