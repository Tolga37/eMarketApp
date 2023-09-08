import Feather from "react-native-vector-icons/Feather";
import {StyleSheet} from 'react-native';

const FeatherIcon = ({ size = 22, name = 'home', color = '#fff', style = {}}) => {

        return (
            <Feather
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
  export default FeatherIcon;
  