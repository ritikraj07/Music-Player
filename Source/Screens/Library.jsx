import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import MyIcon from '../Utility/MyIcon';
let Library = (navigation) => {
  const { colors } = useTheme();
  return (
    <View style={[Styles.container]}>
      <View style={[Styles.header]}>
        <View style={Styles.Hrleft}>
          <MyIcon navigateTo='Home' name={'arrowleft'} size={30} packageName={'AntDesign'} />
          <Text
            style={{
              color: colors.text,
              fontSize: 24,
              fontWeight: 700,
              marginHorizontal: 5
            }}>
            Library
          </Text>
        </View>
        <View style={Styles.HrRight} >
          <MyIcon name={'search'} size={30} packageName={'FontAwesome'} />
          <MyIcon name={'dots-vertical'} size={35} packageName={'MaterialCommunityIcons'} />
        </View>
      </View>
      
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
    alignItems: 'center',
    paddingHorizontal: 5,
    opacity: 1,

  },
  Hrleft: {
    flexDirection: 'row',
    width: '35%',
    alignItems: 'center',
  },
  HrRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '18%'
  }
})

export default Library;
