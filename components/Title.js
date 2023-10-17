import { Text, StyleSheet } from "react-native";

function Title({children}) {
    return <Text style={styles.title} >
                {children}
            </Text>
    
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fee440',
        textAlign: 'center',
        borderWidth: 1, 
        borderColor: '#fee449',
        padding: 12,
    }
})

