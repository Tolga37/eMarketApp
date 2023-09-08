import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from '../src/navigation/navigator/Tab';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {updateCart, updateFavorites} from './redux/action/userActions';

const Router = () => {
  const dispatch = useDispatch();

  const [initialized, setInitialized] = useState(false);

  const userCart = useSelector(state => state.user.cart);
  const userFavorites = useSelector(state => state.user.favorites);

  useEffect(() => {
    if (initialized) updateDeviceStorageCart();
  }, [userCart]);

  useEffect(() => {
    if (initialized) updateDeviceStorageFavorites();
  }, [userFavorites]);

  useEffect(() => {
    getUserCartAndFavorites();
  }, []);

  const updateDeviceStorageCart = async () => {
    await AsyncStorage.setItem('cart', JSON.stringify(userCart));
  };

  const updateDeviceStorageFavorites = async () => {
    await AsyncStorage.setItem('favorites', JSON.stringify(userFavorites));
  };

  const getUserCartAndFavorites = async () => {
    const cart = await AsyncStorage.getItem('cart');
    const favorites = await AsyncStorage.getItem('favorites');
    if (cart) dispatch(updateCart({cart: JSON.parse(cart)}));
    if (favorites)
      dispatch(updateFavorites({favorites: JSON.parse(favorites)}));
    setInitialized(true);
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Router;
