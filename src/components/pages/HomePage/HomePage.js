
import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'

const HomePage = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to StagePage"
        onPress={() => navigation.navigate("StagePage")} />
    </View>
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
  
export default HomePage;


