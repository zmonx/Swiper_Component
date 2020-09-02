import React, { Component } from 'react'
import { View, Image, StatusBar, Dimensions , ScrollView , Text} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height
  }
}


var styles1 = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <StatusBar barStyle="light-content" />
        <Image source={require('./img/bg.jpg')} style={styles.imgBackground} />
        <Swiper
          style={styles.wrapper}  horizontal={true} autoplay={true}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.3)',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#fff',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}
        >
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('./img/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('./img/2.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={require('./img/3.jpg')} />
          </View>
        </Swiper>
     
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        <View testID="Hello" style={styles1.slide1}>
          <Text style={styles1.text}>Hello Swiper</Text>
        </View>
        <View testID="Beautiful" style={styles1.slide2}>
          <Text style={styles1.text}>Beautiful</Text>
        </View>
        <View testID="Simple" style={styles1.slide3}>
          <Text style={styles1.text}>And simple</Text>
        </View>
      </Swiper>

    </ScrollView>
      </View>
    )
  }
}