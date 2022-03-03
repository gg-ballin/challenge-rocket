import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {background} from './App';

interface Props {
  navigation?: any;
  route?: any;
}
const FullScreen = ({navigation, route}: Props) => {
  const {item} = route.state.params;
  console.log('item:', item);
  return (
    <View style={styles.container}>
      <Text>Full screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },
});

export default FullScreen;
