import { useState } from "react";
import { TextInput, View, Alert } from "react-native";
import { StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../constants/color";


function StartGameScreen({onPickNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
            // show alert
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99',
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        onPickNumber(chosenNumber);
       
    }


    return (
    <View style={styles.inputContainer}>
    <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} 
    onChangeText={numberInputHandler}
    value={enteredNumber} />

    <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer} >
            <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
        </View>
     </View>
    </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary600,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.primary800,
        borderBottomWidth: 2,
        color: Colors.primary800,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer:{
        flex: 1
    }
});