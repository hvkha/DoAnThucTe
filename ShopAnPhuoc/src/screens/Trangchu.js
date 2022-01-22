/**
 * @format
 */
 import React from 'react';
 import { StyleSheet,Text, View, StatusBar, Image, FlatList,Dimensions, SafeAreaView} from 'react-native';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
 
 import Logo from '../../assets/logoap.jpg';
 import dssp1 from '../../dssp1';
 import Slider from './Slider';

 const width = Dimensions.get('window').width / 2 - 10;

 const Trangchu = ({navigation}) => {

  const Card = ({dssp}) => {
    return(
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Thongtin', dssp)}>
        <View style={styles.card}>
          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={dssp.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>
            {dssp.Tensp}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {dssp.Gia} đ
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: 'red',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
   return (
       <SafeAreaView style={{flex: 1}}>
         <StatusBar barStyle="light-content" />

         <View style={styles.header}>
               <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chào mừng tới</Text>
                    <Text style={styles.anphuoc}>Shop ANPHUOC</Text>
               </View>
               <Image style={styles.logo} source={Logo}></Image>
         </View>
         <View>
                <View style={{marginTop: 10,flexDirection: 'row', alignItems :'center'}}>
                  <View style={styles.searchContainer}>
                    <MaterialIcons name='search' size={25} style={{marginLeft: 20}}></MaterialIcons>
                    <TextInput placeholder="Bạn cần tìm gì..." style={styles.input}></TextInput>
                  </View>
                  <View>
                  <MaterialIcons name='shopping-cart' size={30} style={{marginLeft:10, marginRight:10}} ></MaterialIcons>
                  </View>
                </View>
         </View>
         <View>
         <Slider></Slider>
         </View>

         <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={dssp1}
        renderItem={({item}) => {
          return <Card dssp={item} />;
        }}
      />
         </SafeAreaView>
   );
 }
 const styles = StyleSheet.create({
   /*phần đầu trang */
   header: {
     backgroundColor:'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
   anphuoc:{
     fontSize: 30,
     fontWeight: 'bold',
     color: 'red',
   },
   logo:{
     alignItems: 'center',
     width: 100,
     height: 100,
   },
   /**Thanh tìm kiếm */
   searchContainer: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: 'black',
  },
 /**Sản phẩm */
 card: {
  height: 225,
  backgroundColor: '#e0e0e0',
  width,
  marginHorizontal: 2,
  borderRadius: 10,
  marginBottom: 5,
  padding: 15,
},
 });
 export default Trangchu;