import { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './src/components/pages/HomePage';
import StagePage from './src/components/pages/StagePage';
import MazePage from './src/components/pages/MazePage';

const Stack = createNativeStackNavigator();

export default function App() {
  const mazePages = [];
  for (let i = 1; i <= 21; i++) {
    mazePages.push(
      <Stack.Screen key={`MazePage${i}`} name={`MazePage${i}`}>
        {props => <MazePage {...props} stage={i} />}
      </Stack.Screen>
    );
  }

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="StagePage" component={StagePage} />
        <Fragment>{mazePages}</Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});