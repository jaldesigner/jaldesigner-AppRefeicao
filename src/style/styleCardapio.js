/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    countainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    countainer2: {
        flex: 1,
    },
    headerCardapio: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 1,
        shadowOpacity: 0.5,
    },
    txtHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: { width: -2, height: 2 },
        textShadowRadius: 5,
    },
    areaTitulo: {
        paddingTop: 40,
        paddingBottom: 40,
    },
    txtTitulo: {
        fontSize: 20,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: "#E33535",
        fontWeight: 'bold',
    },
    /**Lista de pratos */
    List: {
    },
    txtList: {
        fontSize: 18,
        padding: 10,
        marginBottom: 10,
        color: '#5C3938',
    },
    btnVoltar: {
        borderColor: '#C7A8A7',
        borderWidth: 1,
        width: 90,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
});

export default styles;
