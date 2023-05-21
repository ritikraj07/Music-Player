import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  Favorite,
  Library,
  MostPlay,
  Player,
  Playlist,
  RecentAdd,
} from '../Screens/screens';
const Stack = createStackNavigator();
let MyStack = () => {
  return (
      <Stack.Navigator
          screenOptions={{
              headerShown: false,
          }}
      >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Library" component={Library} />
      <Stack.Screen name="MostPlay" component={MostPlay} />
      <Stack.Screen name="Player" component={Player} />
      <Stack.Screen name="Playlist" component={Playlist} />
      <Stack.Screen name="RecentAdd" component={RecentAdd} />
    </Stack.Navigator>
  );
};

export default MyStack;