import { View, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}


export default Card

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary500,
        borderRadius: 8,
        elevation: 6,
        shadowColor: Colors.primary400,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
})