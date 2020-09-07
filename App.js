import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
