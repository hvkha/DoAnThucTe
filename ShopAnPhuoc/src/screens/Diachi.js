import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, Dimensions,View} from 'react-native';

const height = Dimensions.get('window').height;

const Diachi = () => {
    return(
        <View>
        <MapView style={style.map}
        provider={PROVIDER_GOOGLE}
        loadingEnabled={true}
        region={{
            latitude: 10.2519721,
            longitude: 105.9040737,
            latitudeDelta: 2,
            longitudeDelta: 2,
        }}
        >
         <MapView.Marker
         coordinate={{
            latitude: 9.99959300267133,
            longitude: 105.09043355097664,
         }}
         title={"Cửa hàng An Phước Pierre Cardin"}
         description="294 Nguyễn Trung Trực, Phường Vĩnh Bảo, Rạch Giá, Kiên Giang, Việt Nam"
         >
         </MapView.Marker>
         <MapView.Marker
         coordinate={{
            latitude: 10.392400546048341,
            longitude: 105.43209784244863,
         }}
         title={"Shop An Phước"}
         description="21 Hai Bà Trưng, Mỹ Long, Thành phố Long Xuyên, An Giang, Việt Nam"
         >
         </MapView.Marker>
         
         <MapView.Marker
         coordinate={{
            latitude: 10.775054171763822,
            longitude: 106.6747774776609,
         }}
         title={"Cửa hàng thời trang An Phước"}
         description="185 Đường 3/2, Phường 11, Quận 10, Thành phố Hồ Chí Minh, Việt Nam"
         >
         </MapView.Marker>

         <MapView.Marker
         coordinate={{
            latitude: 10.759458136518464,
            longitude: 106.67011403256465,
         }}
         title={"Cửa Hàng An Phước Pierre Cardin (Chính)"}
         description="100/11, 13 An D. Vương, Phường 9, Quận 5, Thành phố Hồ Chí Minh, Việt Nam"
         >
         </MapView.Marker>

         <MapView.Marker
         coordinate={{
            latitude: 10.36335839630939,
            longitude: 106.36037483338413,
         }}
         title={"Cửa Hàng An Phước Pierre Cardin"}
         description="94 Ấp Bắc, Phường 4, Thành phố Mỹ Tho, Tiền Giang"
         >
         </MapView.Marker>

         <MapView.Marker
         coordinate={{
            latitude: 10.456147155415202, 
            longitude: 105.63510062553341,
         }}
         title={"Cửa Hàng An Phước"}
         description="78 Đ. Nguyễn Huệ, Phường 2, TP. Cao Lãnh, Đồng Tháp"
         >
         </MapView.Marker>
         <MapView.Marker
         coordinate={{
            latitude: 9.774238381967155,
            longitude: 105.31592091018776,
         }}
         title={"Shop thời trang An Phước"}
         description="Q8F8+J98, Định An, Gò Quao, Kiên Giang"
         >
         </MapView.Marker>
        </MapView>
        </View>
    )
}
const style = StyleSheet.create({
    map:{
    height
    }
})
export default Diachi;