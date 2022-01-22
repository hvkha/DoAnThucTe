import React from "react";
import { Text, View, StatusBar, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {TouchableOpacity} from "react-native-gesture-handler";

const Canhan = ({navigation}) => {
    return(
        <View style={{flex: 1}}>
            <StatusBar barStyle="light-content"/>
            <View style={style.headerContainer}>
                     <View style={style.cart}/>
                      <Text style={style.headerText}>Cá nhân</Text>
                         <View style={style.cart}>
                        <Icon name="shopping-cart" size={25} color="#fff" />
                        </View>
            </View>
            
            <View style={style.Dkdn}>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('login')}>
                      <View style={style.userContainer}>
                          <View style={style.avatarContainer}>
                              <Icon name="person" size={25} color="#fff" />
                           </View>
                          <View style={style.textContainer}>
                            <Text style={style.welcomeText}>Chào mừng bạn đến với AnPhuocShop</Text>
                            <Text style={style.DText}>Đăng nhập/Đăng ký</Text>
                         </View>
                         <Icon name="chevron-right" size={50} color="#1e88e5" />
                         </View>
            </TouchableOpacity>

           <View style={{marginTop: 10}}>
                <View style={style.thongtin}>
                    <Icon name="list" size={35}></Icon>
                    <Text style={{fontSize: 18, flex:1, marginLeft:10}}>Quản lí đơn hàng</Text>
                    <Icon name="chevron-right" size={30}></Icon>
                </View>
                <View style={style.thongtin}>
                    <Icon name="shopping-cart" size={35}></Icon>
                    <Text style={{fontSize: 18, flex:1, marginLeft:10}}>Sản phẩm đã mua</Text>
                    <Icon name="chevron-right" size={30}></Icon>
                </View>
                <View style={style.thongtin}>
                    <Icon name="check" size={35}></Icon>
                    <Text style={{fontSize: 18, flex:1, marginLeft:10}}>Sản phẩm yêu thích</Text>
                    <Icon name="chevron-right" size={30}></Icon>
                </View>
                <View style={style.thongtin}>
                    <Icon name="star" size={35}></Icon>
                    <Text style={{fontSize: 18, flex:1,marginLeft:10}}>Sản phẩm đã đánh giá</Text>
                    <Icon name="chevron-right" size={30}></Icon>
                </View>
           </View>
           <View style={{marginTop: 20}}>
                <View style={style.thongtin}>
                    <Icon name="contact-support" size={35}></Icon>
                    <Text style={{fontSize: 18, flex:1, marginLeft:10}}>Chăm sóc khách hàng</Text>
                    <Icon name="chevron-right" size={30}></Icon>
                </View>
                <View style={style.thongtin}>
                    <Icon name="settings" size={35}></Icon>
                    <Text style={{fontSize: 18, flex:1, marginLeft:10}}>Cài đặt</Text>
                    <Icon name="chevron-right" size={30}></Icon>
                </View>
           </View>
         </View>
        </View>
    );
}
const style = StyleSheet.create({
/**phần đầu trang */
    headerContainer: {
        flexDirection: 'row',
        paddingTop: 50,
        backgroundColor: 'red',
        justifyContent: 'space-between',
        paddingBottom: 12,
      },
      cart: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
      },

      /**Đăng kí đăng nhập */
      Dkdn: {
        flex: 1,
        backgroundColor: '#ededed',
      },
      
      userContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 22,
        alignItems: 'center',
      },
      avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      },
      textContainer: {
        flex: 1,
        marginLeft: 20,
      },
      welcomeText: {
        color: 'black',
      },
      DText: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
      },

      thongtin:{
          flexDirection: 'row',
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignItems: 'center',
      },
})
export default Canhan;