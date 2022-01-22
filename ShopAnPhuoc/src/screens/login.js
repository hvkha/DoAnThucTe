import React,{Component} from "react";
import {View, Text, StyleSheet,StatusBar, TextInput, Image, TouchableWithoutFeedback,
Keyboard, TouchableOpacity,KeyboardAvoidingView, SafeAreaView} from "react-native";

export default class login extends Component {
    render(){
    return(
        <SafeAreaView style ={style.container}>
            <StatusBar barStyle="light-content"/>
        <KeyboardAvoidingView style={style.container}>
        <TouchableWithoutFeedback style={style.container} onPress={Keyboard.dismiss}>
        <View style={style.logoContainer}>
            <View style={style.logoContainer}>
                <Image source={require('../../assets/logoap.jpg')} style={style.logo}></Image>
                <Text style = {style.title}>Chào mừng đến với Shop AN PHUOC</Text>
            </View>
            <View style = {style.inforContainer}>
                <TextInput style = {style.input}
                placeholder="Tên đăng nhập/ Email"
                placeholderTextColor='black'
                keyboardType='email-address'
                returnKeyType='next'
                autoCorrect={false}
                onSubmitEditing={()=>this.refs.txtPassword.focus()}></TextInput>

                <TextInput style = {style.input}
                placeholder="Nhập mật khẩu"
                placeholderTextColor='black'
                returnKeyType='go'
                secureTextEntry={true}
                autoCorrect={false}
                ref={"txtPassword"}></TextInput>
                <TouchableOpacity style={style.btn}>
                    <Text style = {style.btntext}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
            </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )}
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        flexDirection:'column',
    },
    logoContainer: {
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100,
    },
    title:{
        color: 'red',
        textAlign:'center',
        fontSize: 18,
        marginTop: 5,
    },

    inforContainer: {
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
    },
    input:{
        backgroundColor:'#e2e2e2',
        height: 40,
        marginBottom: 20,
        paddingHorizontal:10,
    },
    btn:{
        backgroundColor:'red',
        paddingVertical: 15,
    },
    btntext:{
        textAlign:'center',
        color:'white',
        fontSize: 18,
        fontWeight:'bold',
    }
})