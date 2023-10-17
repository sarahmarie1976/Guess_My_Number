import { Text, View, StyleSheet } from "react-native"

function GameScreen() {
    return (
        <View style={styles.screen} >
            <Text style={styles.title} >
                Opponents's Guess
            </Text>
            {/* Guess */}
            <View> 
                <Text >
                    Higher or Lower?
                </Text>
                {/* +
                - */}
            </View>
            <View>
                {/* Log Rounds */}
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 50, 
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#353535'
    }
})