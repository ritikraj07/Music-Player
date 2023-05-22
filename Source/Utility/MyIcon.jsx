import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function MyIcon({ name, packageName, size = 45, color = 'white' }) {
    switch (packageName) {
        case 'FontAwesome':
            return <FontAwesome name={name} size={size} color={color} />
        case 'Entypo':
            return <Entypo name={name} size={size} color={color} />
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name} size={size} color={color} />
        default:
            return <FontAwesome name="music" size={size} color={color} />
    }
}

