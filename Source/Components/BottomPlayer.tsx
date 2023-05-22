import { View, Text, StyleSheet } from 'react-native'
import {useTheme} from '@react-navigation/native';
let BottomPlayer = () => {
    const {colors} = useTheme();
    return (
        <View
            style={[Style.container, {backgroundColor:colors.primary}]}
        >
            <Text>
                Bottom Player
            </Text>
        </View>
    )
}


const Style = StyleSheet.create({
    container: {
        height: 60,
    }
})


export default BottomPlayer;