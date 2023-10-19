import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {

  return (
     <View style={styles.buttonOuterContainer} >
         <Pressable 
            style={({pressed}) => 
            pressed ? [styles.buttonInnerContainer, 
            styles.pressed] : styles.buttonInnerContainer }
             onPress={onPress} 
            android_ripple={{color: Colors.primary1200}} >
                <Text style={styles.buttonText} >
                    {children}
                </Text>
        </Pressable>
    </View>   
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 6,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary700,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 10,
        shadowColor: Colors.primary400,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,

    },
    buttonText: {
        color: Colors.primary1300,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
});