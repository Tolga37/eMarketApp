import EvilIcons from "react-native-vector-icons/EvilIcons";
import {StyleSheet} from 'react-native';

const EvilIcon = ({ size = 22, name = 'home', color = '#fff', style = {}}) => {

        return (
            <EvilIcons
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
  export default EvilIcon;
  