import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import Products from '../../components/custom/Products/Products';
export default function FavoriteScreen() {
  const userFavorites = useSelector(state => state.user.favorites);

  return (
    <SafeAreaView style={styles.container}>
      <Products data={Object.values(userFavorites)} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
