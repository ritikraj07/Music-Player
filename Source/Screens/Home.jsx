import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import MyIcon from '../Utility/MyIcon';

let Home = ({navigation}) => {
  const { colors } = useTheme();
  const [NavTab, setNavTab] = useState([
    {
      name: 'LIBRARY',
      icon: { name: 'music', packageName: 'FontAwesome' },
      NoOfSong: 0,
      NavTo:'Library'
    },
    {
      name: 'RECENT PLAY',
      icon: { name: 'back-in-time', packageName: 'Entypo' },
      NoOfSong: 0,
      NavTo: 'RecentPlay'
    },
    {
      name: 'FAVORITE',
      icon: { name: 'heart', packageName: 'FontAwesome' },
      NoOfSong: 0,
      NavTo: 'Favorite'
    },
    {
      name: 'MOST PLAY',
      icon: { name: 'surround-sound', packageName: 'MaterialCommunityIcons' },
      NoOfSong: 0,
      NavTo: 'MostPlay'
    },
    {
      name: 'RECENT ADD',
      icon: { name: 'clock-time-eleven', packageName: 'MaterialCommunityIcons' },
      NoOfSong: 0,
      NavTo: 'RecentAdd'
    },
    {
      name: 'FOLDER',
      icon: { name: 'folder', packageName: 'FontAwesome' },
      NoOfSong: 0,
      NavTo: 'Folder'
    },

  ]);

  const [playlist, setplaylist] = useState([])


  return (
    <View style={[Styles.container]}>
      <View style={[Styles.header]}>
        <View style={Styles.Hrleft}>
          <MyIcon name={'menu'} size={30} packageName={'Entypo'} />
          <Text
            style={{
              color: colors.text,
              fontSize: 24,
              fontWeight: 700,
            }}>
            Music Player
          </Text>
        </View>
        <MyIcon name={'search'} size={30} packageName={'FontAwesome'} />
      </View>
      <View style={[Styles.boxParent, { justifyContent: 'center' }]}>
        {NavTab.map(ele => {
          return (
            <TouchableOpacity key={ele.name} style={[Styles.box,]}
              onPress={()=>navigation.navigate(ele.NavTo)}
            >
              <Text style={[Styles.noOfSong, { color: colors.text }]}>
                {ele.NoOfSong}
              </Text>
              <MyIcon navigateTo={ele.NavTo} packageName={ele.icon.packageName} name={ele.icon.name} color={colors.text}
                style={Styles.boxIcon} />
              <Text style={[Styles.boxName, { color: colors.text }]}>
                {ele.name}
              </Text>
            </TouchableOpacity>
          );
        })}

      </View>
      <View style={[Styles.playlistHeader]}>
        <Text style={{ fontSize: 22, color: colors.text, fontWeight: 600 }} >PLAYLIST ({playlist.length}) </Text>
        <MyIcon size={24} packageName={'FontAwesome'} name={'plus'} />
      </View>

      <ScrollView>
        <View style={[Styles.boxParent, {justifyContent:'flex-start', marginBottom:10}]}>
          <TouchableOpacity style={[Styles.box, {}]}>
            <MyIcon packageName={'FontAwesome'} name={'plus'} />
          </TouchableOpacity>
          {playlist.map((pl, i) => {
            return <TouchableOpacity key={i} style={[Styles.box,]}>
              <Text style={[Styles.noOfSong, { color: colors.text }]}>
                {pl.noOfSong}
              </Text>
              <MyIcon />
              <Text style={[Styles.boxName, { color: colors.text }]}>
                {pl.name}
              </Text>
            </TouchableOpacity>
          })}
          
        </View>


      </ScrollView>
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
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxParent: {
    padding: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    width:'100%',

  },
  box: {
    width: '32%',
    position: 'relative',
    alignItems: 'center',
    padding: 4,
    opacity: 30,
    margin: 2,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginBottom: 1
  },
  noOfSong: {
    position: 'absolute',
    right: 10,
    top: 5,
    fontSize: 15,
  },
  boxName: {
    fontSize: 15,
  },
  boxIcon: {
    marginTop: 15,
  },
  playlistHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,

  },
});
export default Home;
