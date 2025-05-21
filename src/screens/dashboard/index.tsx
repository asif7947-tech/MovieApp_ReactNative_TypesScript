import React from 'react'
import { View } from 'react-native'
import ScreenWrapper from '../../component/screenWrapper'
import TabHeader from '../../component/tabHeader'
import styles from './style'
import { T_DASHBOARD_SCREEN } from './types'


const DashboardScreen: React.FC<T_DASHBOARD_SCREEN> = ({navigation}) => {

  return (
    <ScreenWrapper>
       <View style={styles.container}>
        <TabHeader title="Dashboard" />
    </View>
    </ScreenWrapper>
  )
}

export default DashboardScreen