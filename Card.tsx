import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons';
import {background} from './App';
interface CardObj {
  name: string;
  links: any;
  static_fire_date_utc?: any;
  flight_number?: number;
  success: boolean;
}

interface Props {
  cardObj: CardObj;
  onPress: () => void;
}
const white = '#fff';
const Card = ({cardObj, onPress}: Props) => {
  const logo = cardObj.links.patch.large;
  const date = cardObj.static_fire_date_utc
    ? cardObj.static_fire_date_utc.slice(0, 10)
    : null;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imgContainer}>
        {logo ? (
          <Image
            source={{uri: logo}}
            style={{width: 70, height: 70}}
            resizeMode="contain"
          />
        ) : (
          <ActivityIndicator size={'large'} color={background} />
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{cardObj.name}</Text>
        {date ? <Text style={styles.date}>{date}</Text> : null}
        <Text style={styles.date}>{cardObj.flight_number}</Text>
        {cardObj.success ? (
          <Text style={styles.success}>Success</Text>
        ) : (
          <Text style={styles.failure}>Failure</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: white,
    flexDirection: 'row',
    borderRadius: 15,
    marginBottom: 5,
  },
  imgContainer: {
    backgroundColor: white,
    right: 10,
  },
  titleContainer: {
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  title: {
    color: white,
    fontSize: 15,
  },
  date: {
    color: white,
  },
  success: {
    color: 'green',
    fontSize: 13,
  },
  failure: {
    color: 'red',
    fontSize: 13,
  },
});

export default Card;
