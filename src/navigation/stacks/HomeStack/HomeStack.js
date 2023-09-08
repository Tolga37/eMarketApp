import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../../screens/HomeScreen';
import HeaderStyle from '../../../utils/headerOptions';
import {Ionicon, FeatherIcon} from '../../../components/custom/icons';

import HomeStackSyle from './HomeStackSyle';
import DetailScreen from '../../../screens/DetailScreen';

export default function HomeStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          ...HeaderStyle.TodayHeaderStyle,
          title: 'E-Market',
        }}
      />
      <Stack.Screen
        component={DetailScreen}
        name="DetailScreen"
        options={({route}) => ({title: route?.params?.product?.name, ...HeaderStyle.TodayHeaderStyle,})}
      />
    </Stack.Navigator>
  );
}
