import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {
  addToCart,
  incrementProduct,
  decrementProduct,
  favoriteToggle,
  pageCount,
} from '../../../redux/action/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '../icons';
import {useNavigation} from '@react-navigation/native';

const height = Dimensions.get('window').height;

export default function Products(props) {
  const {
    data,
    page,
    setPage,
    searchWord = '',
    footerLoading = false,
    selectedBrand = '',
  } = props;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userCart = useSelector(state => state.user.cart);
  const userFavorites = useSelector(state => state.user.favorites);

  const addCart = async product => {
    dispatch(addToCart({product}));
  };

  const toggleFavorite = async product => {
    dispatch(favoriteToggle({product}));
  };

  const goToDetail = product => {
    navigation.navigate('DetailScreen', {product});
  };

  function ListFooterComponent() {
    return (
      footerLoading &&
      searchWord == '' &&
      selectedBrand == '' && <ActivityIndicator size="large" color="#999999" />
    );
  }

  const onEndReached = () => {
    if (setPage && searchWord == '' && selectedBrand == '') {
      setPage(page => page + 1);
    }
  };

  function renderItem({item, index}) {
    const userCartProduct = userCart?.[item.id];
    const favorite = userFavorites?.[item.id];

    const decrement = () => {
      dispatch(decrementProduct({product: item}));
    };

    const increment = () => {
      dispatch(incrementProduct({product: item}));
    };

    return (
      <Pressable
        onPress={() => goToDetail(item)}
        style={styles.renderItemContainer}>
        <Image
          style={styles.productImage}
          source={{
            uri: item?.image,
          }}
        />
        <Pressable
          style={{position: 'absolute', right: 10, top: 10}}
          onPress={() => toggleFavorite(item)}>
          <FontAwesomeIcon
            name="star"
            color={favorite ? 'yellow' : 'grey'}
            size={30}
          />
        </Pressable>

        <Text style={styles.productText}>{item?.price} ₺ </Text>
        <Text style={styles.productText}>{item?.name} </Text>
        <Text style={styles.brandText}>{item?.brand} </Text>
        {userCartProduct ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Pressable onPress={decrement}>
              <FontAwesomeIcon name="minus" color="grey" size={30} />
            </Pressable>

            <Text style={{fontSize: 20, marginHorizontal: 20}}>
              {userCartProduct?.count}
            </Text>
            <Pressable onPress={increment}>
              <FontAwesomeIcon name="plus" color="grey" size={30} />
            </Pressable>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              addCart(item);
            }}
            style={{
              flex: 1,
              backgroundColor: '#2D55F6',
              margin: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </Pressable>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(_, index) => index}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  searchInput: {
    height: height / 20,
    marginLeft: 10,
    flex: 1,
    fontSize: 17,
    color: 'white',
  },
  searchBoxContainer: {
    alignItems: 'center',
  },
  searchBox: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#ced4da',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  productImage: {
    margin: 5,
    height: height / 6,
    resizeMode: 'contain',
  },
  productText: {
    fontSize: 18,
    padding: 5,
  },
  brandText:{
    fontSize: 18,
    padding: 5,
    color:"#6c757d"
  },
  addToCartText: {
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
  renderItemContainer: {
    flex: 1,
    margin: 5,
    borderWidth: 0.2,
    borderColor: 'grey',
    borderRadius: 5,
  },
});
