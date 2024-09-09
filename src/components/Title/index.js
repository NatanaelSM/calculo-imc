import { Text, View } from "react-native"
import styles from "./style"

export const Title = () => {
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>OneBitHealth</Text>
        </View>
    )
}