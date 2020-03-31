/* eslint-disable no-fallthrough */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';
import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

//Importaçã do estilo
import styles from '../style';

export default function Login({ navigation }) {

    //=>Hooks<=//
    const [valueEmail, setValueEmail] = useState('');
    const [valueSenha, setValueSenha] = useState('');

    //Constante do usuário
    const userLogin = firebase.auth();

    userLogin.onUserChanged((verificaUsuarioLogado)=>{
        if (verificaUsuarioLogado){
            navigation.navigate('Home');
        }
    });

    //Função de entrar na aplicação
    function startLogin() {
        if (valueEmail === '' || valueSenha === ''){
            alert('Entre com seu email e senha!');
        } else {
            userLogin.signInWithEmailAndPassword(
                valueEmail,
                valueSenha).catch(
                    (error) => {
                        //alert(error.code);
                        switch (error.code){
                            case 'auth/invalid-email':
                                alert('E-mail ou senha fornecidos são inválidos');
                            case 'auth/invalid-action-code':
                                alert('Revise os dados!');
                            case "auth/user-disabled":
                                alert("Usuário desativado! \n Por favor, entre em contato cam a empresa");
                            case "auth/wrong-password":
                                alert('E-mail ou senha fornecidos são inválidos');
                            default:
                                alert('Este usuário não está cadastrado! \n Clique em Cadastrar-se');
                        }
                    });
        }

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
                    resizeMode="contain"
                />
            </View>
            <View style={stlLogin.boxInput}>
                <View>
                    <Text style={stlLogin.txtInput}>Email</Text>
                    <TextInput
                        placeholder="Entre com seu e-mail"
                        style={stlLogin.cmpInput}
                        value={valueEmail}
                        onChangeText={valueEmail => setValueEmail(valueEmail)} />
                </View>
                <View>
                    <Text style={stlLogin.txtInput}>Senha</Text>
                    <TextInput
                        placeholder="Entre com sua senha"
                        style={stlLogin.cmpInput}
                        value={valueSenha}
                        onChangeText={valueSenha => setValueSenha(valueSenha)}
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <View style={styles.areaBtnHome}>
                <TouchableOpacity style={styles.btnR} onPress={() => startLogin()}>
                    <Text style={styles.txtBtn}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.areaBtnHome}>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.btnLink}>Cadastra-se</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const stlLogin = StyleSheet.create({
    boxInput: {
        flex: 1,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30,
        alignItems: 'stretch',
        alignContent: 'space-between',
    },
    cmpInput: {
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    txtInput: {
        color: '#5C3938',
        fontSize: 18,
        marginLeft: 5,
    },
});
