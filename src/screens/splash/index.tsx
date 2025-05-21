import React, { useEffect } from 'react';
import { View, Text , StyleSheet, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootStack/types';
import styles from './style';
import Screens from '../../navigation/screens';
import { SplashScreenNavigationProp } from './types';
import AppLocalimages from '../../assets/images';


const SplashScreen: React.FC<SplashScreenNavigationProp> = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace(Screens.HOME_STACK);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={
          AppLocalimages.AppLogo
        }
        // source={{ uri: 'https://example.com/logo.png' }} // Example of using a URL
        // source={require('../../assets/images/app_logo.webp')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.appName}>My App Name</Text>
    </View>
  );
}

export default SplashScreen