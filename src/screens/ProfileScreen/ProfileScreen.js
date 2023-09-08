import ProfileScreenStyle from './ProfileScreenStyle';
import {Text, SafeAreaView} from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={ProfileScreenStyle.container}>
      <Text style={ProfileScreenStyle.text}> PROFILE</Text>
    </SafeAreaView>
  );
}
