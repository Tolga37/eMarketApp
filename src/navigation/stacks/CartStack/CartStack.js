import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../../../screens/CartScreen/CartScreen';
import HeaderStyle from '../../../utils/headerOptions'


export default function DetailStack()  {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="CartScreen">
            <Stack.Screen component={CartScreen} name="CartScreen"  options={{...HeaderStyle.TodayHeaderStyle,title:"Cart"}} />
        </Stack.Navigator>
    )
}   
