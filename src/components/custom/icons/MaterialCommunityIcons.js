import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {StyleSheet} from 'react-native';

const MaterialCommunityIcon = ({ size = 22, name = 'home', color = '#fff', style = {}}) => {

        return (
            <MaterialCommunityIcons
              size={size}
              name={name}
              color={color}
              style={{...styles.icon, ...style}}
            />
          );
    
 
  };
  
  const styles = StyleSheet.create({
    icon: {
      
    },
  });
  export default MaterialCommunityIcon;
  