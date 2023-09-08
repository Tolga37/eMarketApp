import FontAwesome from "react-native-vector-icons/FontAwesome";
import {StyleSheet} from 'react-native';

const FontAwesomeIcon = ({ size = 22, name = 'home', color = '#fff', style = {}}) => {

        return (
            <FontAwesome
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
  export default FontAwesomeIcon;
  