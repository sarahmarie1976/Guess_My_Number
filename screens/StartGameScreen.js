import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');
  
    function numberInputHandler(enteredText) {
      setEnteredNumber(enteredText);
    }
  
    function resetInputHandler() {
      setEnteredNumber('');
    }
  
    function confirmInputHandler() {
      const chosenNumber = parseInt(enteredNumber);
  
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert(
          'Invalid number!',
          'Number has to be a number between 1 and 99.',
          [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
        );
        return;
      }
  
      onPickNumber(chosenNumber);
    }
    return (
      <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText> 
          Enter a number from 1 to 100
        </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      marginTop: 100,
      alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 100,
        fontSize: 32,
        borderBottomColor: Colors.primary1100,
        borderBottomWidth: 2,
        color: Colors.primary1100,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});