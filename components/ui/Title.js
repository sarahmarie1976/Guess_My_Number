import { Text, StyleSheet } from "react-native";
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
        //fontWeight: 'bold',
        color: Colors.primary1400,
        textAlign: 'center',
        borderWidth: 1, 
        borderColor: Colors.primary1400,
        padding: 12,
    }
})

