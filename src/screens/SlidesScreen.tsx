/* eslint-disable react-native/no-inline-styles */

import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  ImageSourcePropType,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';


interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> { }


export const SlidesScreen = ({ navigation }: Props) => {

  const {
    width: screenWidth,
    // height: screenHeight,
  } = Dimensions.get('window');

  const [activeIndex, setactiveIndex] = useState(0);

  const { opacity, fadeIn } = useAnimation();

  const { theme: { colors: { primary, background } } } = useContext(ThemeContext);



  const renderItem = (item: Slide) => {
    return (
      <View style={styles.containerCard}>
        <Image
          source={item.img}
          style={styles.img}
        />
        <Text style={styles.textTitle}>
          {item.title}
        </Text>
        <Text style={styles.textDescription}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 50 }}
    >
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({ item }: { item: Slide }) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'default'}
        onSnapToItem={(index) => {
          setactiveIndex(index);
          if (index === 2) {
            fadeIn(1000);
          }
        }}
      />
      <View style={styles.containerPagination}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={styles.dotStyle}
          dotColor={primary}
          inactiveDotColor={'#919fb6'}
        />

        {activeIndex === 2 && (
          <Animated.View style={{ opacity }}>
            <TouchableOpacity
              style={{...styles.buttonFinish, backgroundColor: primary}}
              activeOpacity={0.3}
              onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text style={{ ...styles.textTitle, color: background }}>
                {'Entrar'}{' '}
              </Text>
              <Icon name={'paper-plane'} size={20} color={background} />
            </TouchableOpacity>
          </Animated.View>

        )}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2f1c64',
  },
  textDescription: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'justify',
  },
  img: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#2f1c64',
  },
  buttonFinish: {
    flexDirection: 'row',
    backgroundColor: '#2f1c64',
    width: 140,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPagination: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    alignItems: 'center',
  },
});
