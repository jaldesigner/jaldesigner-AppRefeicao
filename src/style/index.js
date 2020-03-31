import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  /*Conteiner da aplicação*/
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /*Imagem topo Home*/
  ImgTopHome: {
    resizeMode: 'cover',
    width: '100%',
    height: 150,
  },
  /*Style da Logo*/
  ViewLogo: {
    alignItems: 'center',
    position: 'relative',
    top: -50,
  },
  logo: {
    width: 100,
    height: 100,
    flex: 1,
  },
  areaBtnHome: {
    alignItems: 'center',
    flex: 1,
  },
  btnR: {
    elevation: 5,
    marginBottom: 15,
    padding: 10,
    width: 250,
    borderRadius: 20,
    backgroundColor: '#E33535',
  },
  btnO: {
    elevation: 5,
    marginBottom: 15,
    padding: 10,
    width: 250,
    borderRadius: 20,
    backgroundColor: '#C23A0F',
  },
  btnY: {
    elevation: 5,
    marginBottom: 15,
    padding: 10,
    width: 250,
    borderRadius: 20,
    backgroundColor: '#CB7B03',
  },
  txtBtn:{
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  boxInputCadastro:{
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
  btnLink:{
    color: '#0088FF',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    padding: 10,
  },
});

export default styles;
