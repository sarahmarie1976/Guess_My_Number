import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({children}) {
    return <Text style={styles.title} >
                {children}
            </Text>
    
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 25,
        fontWeight: 'bold',
        color: Platform.select({ios: Colors.primary140 , android: Colors.primary1400 }) ,
        textAlign: 'center',
        //borderWidth: Platform.OS === 'android' ? 2 : 0, 
        borderWidth: Platform.select({ios: 0, android: 2 }),
        borderColor: Colors.primary1400,
        padding: 12,
        maxWidth: '80%',
        width: 300,
    }
})

