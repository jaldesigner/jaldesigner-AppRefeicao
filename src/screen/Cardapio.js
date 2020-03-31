/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { Text, View, FlatList,ImageBackground, TouchableOpacity, Image } from 'react-native';

import styles from '../style/styleCardapio';

//Ler os dados do banco de dados

const DATA = [
  {
    id: '1',
    prato: 'Frago a parmegiana',
  },
  {
    id: '2',
    prato: 'Bife com Fritas',
  },
  {
    id: '3',
    prato: 'Estrogonofre de Frango',
  },
];
function Items({ title, navigation, id}) {
  return (
    <View style={styles.List}>
      <TouchableOpacity
        style={{ flexDirection: 'row', marginBottom: 5 }}
        onPress={() => navigation.navigate('SelectionPrato', {pratoID:id, nomePrato: title})}>
        <Image source={require('../img/imgList.png')} style={{ marginLeft: 30, marginTop: 10 }} />
        <Text style={styles.txtList}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default function Cardapio({navigation}){
    return (
      <View style={styles.countainer}>

        {/**Imagem de topo */}
        <ImageBackground
          source={require('../img/Header_Homer.png')}
          style={styles.headerCardapio}>
          <Text style={styles.txtHeader}>Cardápio</Text>
        </ImageBackground>

        {/**Título do topo */}
        <View style={styles.areaTitulo}>
          <Text style={styles.txtTitulo}>Pratos do dia</Text>
        </View>

        {/**Opções de pratos*/}
        <View style={styles.countainer2} >
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Items title={item.prato} navigation ={navigation} id={item.id}/>}
            keyExtractor={item => item.id} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20, }}>
          <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()}>
            <Text>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
}
