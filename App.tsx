import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native';

import MyStack from './Source/Navigator/MyStack';
import BottomPlayer from './Source/Components/BottomPlayer';





function App(){
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} />
      <MyStack />
      <BottomPlayer />
    </NavigationContainer>
  );
}

export default App;
