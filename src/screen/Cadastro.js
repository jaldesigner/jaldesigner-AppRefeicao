/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState} from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import firebase from '@react-native-firebase/app';

//Importaçã do estilo
import styles from '../style';

export default function Cadastro({ navigation }) {
    //Pega os estados dos campos
    const [valorEmail, setValorEmail] = useState('');
    const [valorSenha, setValorSenha] = useState('');
    const [repitaSenha, setRepitaSenha] = useState('');

    //constante do firebase
    const auten = firebase.auth();

    //Cadastra o novo usuário
    const cadastrar = ()=>{

        if (valorSenha !== repitaSenha) {
            alert('As senhas precisam estarem iguais!');
        }else if(valorEmail === '' || valorSenha === '' || repitaSenha === ''){
            alert("Por favor, preencha todos os campos!");
        }
        else {
            auten.createUserWithEmailAndPassword(
                valorEmail,
                valorSenha).catch(
                    (erro)=>{
                        alert(erro.message);
                    }
                );
            alert("Obrigado por se cadastrar!");
            navigation.navigate("Home");

        }
    };
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
            <View style={styles.boxInputCadastro}>
                <View>
                    <Text style={styles.txtInput}>E-mail</Text>
                    <TextInput
                        style={styles.cmpInput}
                        placeholder="E-mail"
                        value={valorEmail}
                        onChangeText={valorEmail=> setValorEmail(valorEmail)}
                        textContentType="emailAddress"
                        autoCompleteType="email"
                    />
                </View>
                <View>
                    <Text style={styles.txtInput}>Senha</Text>
                    <TextInput
                        style={styles.cmpInput}
                        placeholder="Senha"
                        value={valorSenha}
                        onChangeText={valorSenha => setValorSenha(valorSenha)}
                        secureTextEntry={true}
                        textContentType="password"
                    />
                </View>
                <View>
                    <Text style={styles.txtInput}>Repita a senha</Text>
                    <TextInput
                        style={styles.cmpInput}
                        placeholder="Repita a senha"
                        value={repitaSenha}
                        onChangeText={repitaSenha => setRepitaSenha(repitaSenha)}
                        secureTextEntry={true}
                        textContentType="password"
                    />
                </View>
            </View>
            <View style={styles.areaBtnHome}>
                <TouchableOpacity style={styles.btnO} onPress={()=> cadastrar()}>
                    <Text style={styles.txtBtn}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.areaBtnHome}>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <Text style={styles.btnLink}>Já tenho conta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
