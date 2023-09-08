import HomeStack from '../../stacks/HomeStack';
import CartStack from '../../stacks/CartStack/CartStack';
import FavoriteStack from '../../stacks/FavoriteStack';
import ProfileStack from '../../stacks/ProfileStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import bottomStyle from './BottomTabStyle';
import {FontAwesomeIcon, Ionicon} from '../../../components/custom/icons';

export default function BottomTab() {
  const userCart = useSelector(state => state.user.cart);
  let cartProductNumber = 0;
  Object.values(userCart).map(product => (cartProductNumber += product.count));

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          ...bottomStyle,
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Ionicon name="home-outline" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          ...bottomStyle,
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Ionicon name="basket-outline" color={color} size={28} />
          ),
          tabBarBadge: cartProductNumber,
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={FavoriteStack}
        options={{
          ...bottomStyle,
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="star-o" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          ...bottomStyle,
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="user-o" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
