import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import MyIcon from '../Utility/MyIcon';
import RandomBackGroundColor from '../Utility/RandomBackgroundColor';

let Home = () => {
  const { colors } = useTheme();
  const [NavTab, setNavTab] = useState([
    {
      name: 'LIBRARY',
      icon: { name: 'music', packageName: 'FontAwesome' },
      NoOfSong: 0,
    },
    {
      name: 'RECENT PLAY',
      icon: { name: 'back-in-time', packageName: 'Entypo' },
      NoOfSong: 0,
    },
    {
      name: 'FAVORITE',
      icon: { name: 'heart', packageName: 'FontAwesome' },
      NoOfSong: 0,
    },
    {
      name: 'MOST PLAY',
      icon: { name: 'surround-sound', packageName: 'MaterialCommunityIcons' },
      NoOfSong: 0,
    },
    {
      name: 'RECENT ADD',
      icon: { name: 'clock-time-eleven', packageName: 'MaterialCommunityIcons' },
      NoOfSong: 0,
    },
    {
      name: 'FOLDER',
      icon: { name: 'folder', packageName: 'FontAwesome' },
      NoOfSong: 0,
    },

  ]);

  const [playlist, setplaylist] = useState([])


  return (
    <View style={[Styles.container]}>
      <View style={[Styles.header]}>
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
      <View style={[Styles.boxParent]}>
        {NavTab.map(ele => {
          return (
            <TouchableOpacity key={ele.name} style={[Styles.box,]}>
              <Text style={[Styles.noOfSong, { color: colors.text }]}>
                {ele.NoOfSong}
              </Text>
              <MyIcon packageName={ele.icon.packageName} name={ele.icon.name} color={colors.text}
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
        <MyIcon size={24} />
      </View>

      <ScrollView style={Styles.playlistboxParent} >
        <TouchableOpacity style={[Styles.box,{}]}>
          <MyIcon packageName={'FontAwesome'} name={'plus'} />
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.box, {}]}>
          <MyIcon packageName={'FontAwesome'} name={'plus'} />
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.box, {}]}>
          <MyIcon packageName={'FontAwesome'} name={'plus'} />
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.box, {}]}>
          <MyIcon packageName={'FontAwesome'} name={'plus'} />
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.box, {}]}>
          <MyIcon packageName={'FontAwesome'} name={'plus'} />
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.box, {}]}>
          <MyIcon packageName={'FontAwesome'} name={'plus'} />
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.box, {}]}>
          <MyIcon packageName={'FontAwesome'} name={'plus'} />
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.box, {}]}>
          <MyIcon packageName={'FontAwesome'} name={'plus'} />
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.box, {}]}>
          <MyIcon packageName={'FontAwesome'} name={'plus'} />
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10
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
    justifyContent: 'center',
    

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
  playlistboxParent: {
    padding: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

  }
});
export default Home;
