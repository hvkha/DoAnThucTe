
 import React, {Component} from 'react';
 import {View} from 'react-native';
 import {SliderBox} from 'react-native-image-slider-box';
 import {FastImage} from 'react-native-fast-image';

 export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            "https://cafefcdn.com/thumb_w/650/pr/2020/1609297242509-0-0-375-600-crop-1609297246394-63744943478354.jpg",
            "https://channel.mediacdn.vn/thumb_w/640/2020/12/30/photo-1-1609297162464147821669.jpg",
            "https://channel.mediacdn.vn/thumb_w/640/2020/12/30/photo-2-16092971624711325952344.jpg",
          ]
        };
      }
      render(){
          return(
              <View>
            <SliderBox
            ImageComponent={FastImage}
            images={this.state.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10
            }}
            dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)"
                     }}
            ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
            imageLoadingColor="#2196F3"
         />
         </View>
          )
      }
      
 }