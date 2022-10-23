import { Text, StyleSheet } from "react-native";

function Title({children}){
    return <Text style={styles.titleData}>{children}</Text>
}

export default Title;


const styles = StyleSheet.create({
    titleData:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ddb52f',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: '#ddb52f',
      padding: 12
    }
  });