import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

let Home = () => {
  const {colors} = useTheme();
  return (
    <View style={[Styles.container]}>
      <View style={[Styles.header, {backgroundColor: colors.primary}]}>
        <View style={Styles.Hrleft}>
          <Entypo name="menu" size={30} color={colors.text} />
          <Text
            style={{
              color: colors.text,
              fontSize: 24,
              fontWeight: 700,
            }}>
            Music Player
          </Text>
        </View>
        <FontAwesome name="search" size={30} color={colors.text} />
      </View>
      <View style={Styles.boxParent}>
        <View style={Styles.box}>
          <Text style={[Styles.noOfSong, {color: colors.text}]}>0</Text>
          <FontAwesome
            name="music"
            size={40}
            color={colors.text}
            style={Styles.boxIcon}
          />
          <Text style={[Styles.boxName, {color: colors.text}]}>Library</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  Hrleft: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxParent: {
    padding: 10,
  },
  box: {
    width: '30%',
    backgroundColor: 'blue',
    position: 'relative',
    alignItems: 'center',
    padding: 10,
  },
  noOfSong: {
    position: 'absolute',
    right: 10,
    fontSize: 15,
  },
  boxName: {
    fontSize: 20,
  },
  boxIcon: {
    marginTop: 15,
  },
});
export default Home;
