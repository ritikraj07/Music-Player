import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
export default function MyIcon({ navigateTo="", name, packageName, size = 45, color = 'white', style = {} }) {
    const navigation = useNavigation();
    if (navigateTo != "") {
        switch (packageName) {
            case 'FontAwesome':
                return <FontAwesome onPress={() => navigation.navigate(navigateTo)} name={name} size={size} color={color} style={style} />
            case 'Entypo':
                return <Entypo onPress={() => navigation.navigate(navigateTo)} name={name} size={size} color={color} style={style} />
            case 'MaterialCommunityIcons':
                return <MaterialCommunityIcons onPress={() => navigation.navigate(navigateTo)} name={name} size={size} color={color} style={style} />
            case 'AntDesign':
                return <AntDesign onPress={() => navigation.navigate(navigateTo)} name={name} size={size} color={color} style={style} />
            default:
                return <FontAwesome onPress={() => navigation.navigate(navigateTo)} name="music" size={size} color={color} style={style} />
        }
    } else {
        switch (packageName) {
            case 'FontAwesome':
                return <FontAwesome name={name} size={size} color={color} style={style} />
            case 'Entypo':
                return <Entypo name={name} size={size} color={color} style={style} />
            case 'MaterialCommunityIcons':
                return <MaterialCommunityIcons name={name} size={size} color={color} style={style} />
            case 'AntDesign':
                return <AntDesign name={name} size={size} color={color} style={style} />
            default:
                return <FontAwesome name="music" size={size} color={color} style={style} />
        }
    }
    
}

