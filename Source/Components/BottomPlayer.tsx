import { View, Text, StyleSheet } from 'react-native'

let BottomPlayer = () => {
    return (
        <View
            style={Style.container}
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
        backgroundColor: 'red',
    }
})


export default BottomPlayer;