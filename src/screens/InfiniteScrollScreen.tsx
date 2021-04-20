/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { Header } from '../components/Header';

export const InfiniteScrollScreen = () => {

  const [numbers, setnumbers] = useState([237, 238, 239, 240, 241, 242]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 6; i++) {
      newArray[i] = numbers.length + i;
    }
    setnumbers([...numbers, ...newArray]);
  };

  const renderItem = (item: any) => {
    const uri = `https://picsum.photos/id/${item}/1024/1024`;
    return (
      <FadeInImage
        uri={uri}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 8,
        }}
      />
    );
  };


  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.toString()}
        ListHeaderComponent={() => (
          <View style={{ marginHorizontal: 20 }}>
            <Header title="InfiniteScroll" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={styles.containerActivity}>
            <ActivityIndicator size={40} color={'#f84e1e'} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
  containerActivity: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
