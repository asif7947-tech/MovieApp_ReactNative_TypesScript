import React from 'react';
import {T_SCREEN_WRAPPER} from './types';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../theme/colors';

const ScreenWrapper: React.FC<T_SCREEN_WRAPPER> = ({children}) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View
        style={[
          styles.mainContainer,
          {paddingTop: insets.top, backgroundColor: COLORS.White},
        ]}>
        {children}
      </View>
    </SafeAreaProvider>
  );
};

export default ScreenWrapper;
