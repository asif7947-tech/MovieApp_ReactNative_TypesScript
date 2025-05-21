import {View, Text} from 'react-native';
import React from 'react';
import {T_TAB_HEADER} from './types';
import {styles} from './styles';

const TabHeader: React.FC<T_TAB_HEADER> = ({title}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TabHeader;
