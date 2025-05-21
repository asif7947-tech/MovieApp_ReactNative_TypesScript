import { View, Text } from 'react-native'
import React from 'react'
import { T_MORE_SCREEN } from './types'
import ScreenWrapper from '../../component/screenWrapper'
import TabHeader from '../../component/tabHeader'
import styles from './style'

const MoreScreen: React.FC<T_MORE_SCREEN> = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <TabHeader title="More" />
    </View>
    </ScreenWrapper>
  )
}

export default MoreScreen