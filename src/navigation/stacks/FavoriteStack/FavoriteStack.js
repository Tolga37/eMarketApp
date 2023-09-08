import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../../../screens/FavoriteScreen'
import HeaderStyle from '../../../utils/headerOptions'


export default function FavoriteStack()  {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="FavoriteScreen">
            <Stack.Screen component={FavoriteScreen} name="FavoriteScreen"  options={{...HeaderStyle.TodayHeaderStyle,title:"Favorite"}} />
        </Stack.Navigator>
    )
}   
