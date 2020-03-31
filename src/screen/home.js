/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Alert, BackHandler } from 'react-native';
import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
//Importaçã do estilo
import styles from '../style';

export default function Home({ navigation }) {
    //Função para sair
    function deslogar() {
        const auten = firebase.auth();
        const sair = ()=>{
            auten.signOut();
            BackHandler.exitApp();
            navigation.navigate("Login");
        }
        Alert.alert(
            'Sair',
            'Deseja realmente sair?',
            [
                {
                    text:'Não',
                    onPress: () => console.log('Cancelado'),
                    style: "cancel",
                },{
                    text:'Sim',
                    onPress: ()=> sair(),
                }
            ],{
                cancelable: false,
            }
        );

    }
    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../img/Header_Homer.png')}
                style={styles.ImgTopHome}
            />
            <View style={styles.ViewLogo}>
                <Image
                    source={require('../img/logo.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.areaBtnHome}>
                <TouchableOpacity style={styles.btnR} onPress={()=> navigation.push('Cardapio')}>
                    <Text style={styles.txtBtn}>Cardápio</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>deslogar()} style={styles.btnO}>
                    <Text style={styles.txtBtn}>Sair</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
