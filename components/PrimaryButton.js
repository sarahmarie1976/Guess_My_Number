import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {

  return (
     <View style={styles.buttonOuterContainer} >
         <Pressable 
            style={({pressed}) => 
            pressed ? [styles.buttonInnerContainer, 
            styles.pressed] : styles.buttonInnerContainer }
             onPress={onPress} 
            android_ripple={{color: 'cad2c5'}} >
                 <Text style={styles.buttonText} >{children}</Text>
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
        backgroundColor: '#6f8835',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,

    },
    buttonText: {
        color: "whitesmoke",
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
});