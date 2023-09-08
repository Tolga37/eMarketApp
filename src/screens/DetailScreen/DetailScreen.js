import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import {
  addToCart,
  incrementProduct,
  decrementProduct,
  favoriteToggle,
} from '../../redux/action/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '../../components/custom/icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DetailScreen = props => {
  const {route} = props;
  const {product} = route?.params;

  const userCart = useSelector(state => state.user.cart);
  const userFavorites = useSelector(state => state.user.favorites);

  const dispatch = useDispatch();
  const addCart = async product => {
    dispatch(addToCart({product}));
  };

  const toggleFavorite = async product => {
    dispatch(favoriteToggle({product}));
  };

  const userCartProduct = userCart?.[product?.id];
  const favorite = userFavorites?.[product?.id];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.productImage}
            source={{
              uri: product?.image,
            }}
          />
        </View>
        <Pressable
          onPress={() => {
            toggleFavorite(product);
          }}
          style={{position: 'absolute', right: 15, top: 15}}>
          <FontAwesomeIcon
            name="star"
            color={favorite ? 'yellow' : 'grey'}
            size={30}
          />
        </Pressable>

        <Text style={{fontSize: 25, fontWeight: 'bold', margin: 10}}>
          {product?.name}
        </Text>
        <Text style={{fontSize: 20,    color:"#6c757d", margin: 10}}>
          {product?.brand}
        </Text>
        <Text style={{fontSize: 16, margin: 10}}>{product?.description}</Text>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <Text style={{color: 'blue', fontSize: 17}}>Price:</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            {product?.price} ₺
          </Text>
        </View>
        {userCartProduct ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Pressable
              onPress={() => {
                dispatch(decrementProduct({product: product}));
              }}>
              <FontAwesomeIcon name="minus" color="grey" size={30} />
            </Pressable>

            <Text style={{fontSize: 20, marginHorizontal: 20}}>
              {userCartProduct?.count}
            </Text>
            <Pressable
              onPress={() => {
                dispatch(incrementProduct({product: product}));
              }}>
              <FontAwesomeIcon name="plus" color="grey" size={30} />
            </Pressable>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              addCart(product);
            }}
            style={{
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
              backgroundColor: '#2D55F6',
              borderRadius: 7,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    height: height / 2.8,
    width: width / 1.04,
    resizeMode: 'contain',
  },
});

export default DetailScreen;
