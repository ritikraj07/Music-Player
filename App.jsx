import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import MyStack from './Source/Navigator/MyStack';
import BottomPlayer from './Source/Components/BottomPlayer';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    background: '#128C7E',
    primary: '#075E54',
    card: 'white',
    text: 'white',
    border: 'white',
    notification: 'white',
  },
};


function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar />
      <MyStack />
      <BottomPlayer />
    </NavigationContainer>
  );
}

export default App;
