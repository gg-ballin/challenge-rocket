/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from './Card';
import ModalBottom from './Modal';

const white = '#fff';
export const background = '#1f1f27';
const API_URL = 'https://api.spacexdata.com/v4/launches';
const App = () => {
  const [dataFetch, setData] = useState(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  useEffect(() => {
    if (!dataFetch) {
      fetch(API_URL)
        .then(res => res.json())
        .then(data => setData(data));
    }
  }, []);
  let image;
  if (dataFetch) {
    console.log('dataFetch: ', dataFetch);
    image = dataFetch.links ? dataFetch.links.patch.large : null;
  }
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#1f1f27'}} />
      <View style={styles.container}>
        <Text style={styles.title}>Launches</Text>
        {dataFetch ? (
          <FlatList
            data={dataFetch}
            horizontal={false}
            showsVerticalScrollIndicator
            keyExtractor={item => item.id}
            renderItem={({item, key}: any) => (
              <Card
                cardObj={item}
                key={key}
                onPress={() => {
                  setShowModal(!showModal);
                  setSelectedLaunch(item);
                }}
              />
            )}
          />
        ) : (
          <Text>Loading...</Text>
        )}
        <View style={styles.bottomTab}></View>
        <ModalBottom visible={showModal} onDismiss={() => setShowModal(false)}>
          {selectedLaunch ? (
            <ScrollView style={styles.containerModal}>
              <Text style={styles.titleModal}>{selectedLaunch.name}</Text>
              <View style={{alignItems: 'center', marginTop: 10, marginBottom: 10}}>
                <Image
                  source={{uri: selectedLaunch.links.patch.large}}
                  style={{width: 70, height: 70}}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.desc}>{selectedLaunch.details}</Text>
            </ScrollView>
          ) : null}
        </ModalBottom>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: 'center',
  },
  title: {
    color: white,
    fontSize: 35,
  },
  containerModal: {
    paddingHorizontal: 10,
  },
  titleModal: {
    color: white,
    fontSize: 30,
    alignSelf: 'center',
  },
  desc: {
    color: white,
    fontSize: 15,
  },
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: background,
    height: 100,
    zIndex: 2,
  },
});

export default App;
