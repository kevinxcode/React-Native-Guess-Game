import { Text, StyleSheet } from "react-native";
import Colors from "../constants/color";

function Title({children}){
    return <Text style={styles.titleData}>{children}</Text>
}

export default Title;


const styles = StyleSheet.create({
    titleData:{
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.primary800,
      textAlign: 'center',
      borderWidth: 2,
      borderColor: Colors.primary800,
      padding: 12
    }
  });