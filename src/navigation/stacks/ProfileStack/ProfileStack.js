import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../../screens/ProfileScreen'
import HeaderStyle from '../../../utils/headerOptions'


export default function UpComingEventsStack()  {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="ProfileScreen">
            <Stack.Screen component={ProfileScreen} name="ProfileScreen"  options={{...HeaderStyle.TodayHeaderStyle,title:"Profile"}}  />
        </Stack.Navigator>
    )
}   
