/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component,useState } from 'react';
import { Text, View, ImageBackground, ScrollView,SafeAreaView, Switch, FlatList, TouchableOpacityBase } from 'react-native';
import styles from '../style/styleCardapio';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SelectionPrato({ route, navigation }) {

  /** Captura os dados vindo tela anterior **/
  const { pratoID } = route.params;
  const { nomePrato } = route.params;

  /** Trata as string e os números vindo da escolha das opções **/
  var nbID = JSON.stringify(pratoID).replace(/['"]+/g, '');
  var strPrato = JSON.stringify(nomePrato).replace(/['"]+/g, '');

  /** Array com as opções do prato selecionado **/
  const OpcoesDePrato = [
    {
      id: '1',
      opt: 'Arroz',
      conteudo: '',
      acompanha: true,
    },
    {
      id: '2',
      opt: 'Feijão',
      conteudo: '',
      acompanha: true,
    },
    {
      id: '3',
      opt: 'Farofa',
      conteudo: '',
      acompanha: true,
    },
    {
      id: '4',
      opt: 'Salada',
      conteudo: 'alface, agrião, cebola e tomate',
      acompanha: true,
    },
  ];

  /** Função para pegar os dados e exibir na FlatList **/
  function ListOption({ opt, cntd, acompanha, id, name}) {

    const [decisao, setDecisao] = useState(acompanha);

    return (
      <View style={{ alignItems: 'flex-start', flexDirection: 'row', marginLeft: 20, marginBottom: 10 }}>

        <Switch
          onValueChange={()=> setDecisao(decisao === true ? false : true )}
          value={decisao}
        />
        <Text>{opt}</Text>
        {cntd === '' ? false : <Text
          style={{
            color: '#CB7B03',
            fontSize: 11,
            position: 'relative',
            top: 20,
            left: -40,
          }}> ({cntd}) </Text>}
      </View>
    );
  }

  /** Função q ue cria uma linha de separação **/
  function LnSeparar() {
    return (
      <View
        style={{
          width: '100%',
          height: 0.5,
          backgroundColor: '#ccc',
          marginTop: 10,
          marginBottom: 10,
        }}
      />
    );
  }
  return (
    <View  style={styles.countainer}>
      {/**Imagem de topo */}
      <ImageBackground
        source={require('../img/Header_Homer.png')}
        style={styles.headerCardapio}>
        <Text style={styles.txtHeader}>Seleção</Text>
      </ImageBackground>

      {/**Título do topo */}
      <View style={styles.areaTitulo}>
        <Text style={styles.txtTitulo}>Opções do prato</Text>
      </View>

      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 12, color: '#C23A0F' }}>Prato Selecionado:</Text>
        <Text style={{ color: '#5C3938', fontSize: 18 }}>
          {strPrato.replace(/['"]+/g, '')}
        </Text>
      </View>

      <LnSeparar />

      <FlatList
        data={OpcoesDePrato}
        renderItem={({ item }) =>
          <ListOption
            opt={item.opt}
            cntd={item.conteudo}
            acompanha={item.acompanha}
            id={item.id}
            name={item.name}
             />}

        keyExtractor={item => item.id}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 20,}}>
        <TouchableOpacity style={styles.btnVoltar} onPress={()=> navigation.goBack()}>
          <Text>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          borderColor: '#C7A8A7',
          borderWidth: 1,
          width: 90,
          borderRadius: 10,
          alignItems: 'center',
          alignSelf: 'flex-start',
        }}>
          <Text>Próximo</Text>
        </TouchableOpacity>

      </View>
    </View>

  );
}
