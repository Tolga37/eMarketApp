import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementProduct,
  incrementProduct,
} from '../../redux/action/userActions';
export default function CartScreen() {
  const userCart = useSelector(state => state.user.cart);
  const userFavorites = useSelector(state => state.user.favorites);

  const dispatch = useDispatch();

  const renderItem = useCallback(({item, index}) => {
    return (
      <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
        <View style={{margin: 10, flex: 1}}>
          <Text style={styles.productName}>{item.name} </Text>
          <Text style={styles.productPrice}>{item.count * item.price}₺</Text>
        </View>
        <View
          style={{
            flex: 1,
            margin: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(decrementProduct({product: item}));
            }}
            style={styles.ıncrement}>
            <Text style={styles.decrement}>-</Text>
          </TouchableOpacity>
          <Text style={styles.count}>{item?.count} </Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(incrementProduct({product: item}));
            }}
            style={styles.ıncrement}>
            <Text style={styles.decrement}>+</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Object.values(userCart)}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ıncrement: {
    backgroundColor: '#e5e5e5',
    padding: 10,
  },
  decrement: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  count: {
    fontSize: 20,
    backgroundColor: '#2D55F6',
    paddingHorizontal: 25,
    color: 'white',
    padding: 10,
  },
  productName: {
    fontSize: 18,
    padding: 5,
  },
  productPrice: {
    fontSize: 18,
    padding: 5,
    color: '#2D55F6',
  },
});
