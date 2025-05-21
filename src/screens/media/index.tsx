import { View, Text } from 'react-native'
import React from 'react'
import { T_MEDIA_LIBRARY_SCREEN } from './types'
import ScreenWrapper from '../../component/screenWrapper'
import TabHeader from '../../component/tabHeader'
import styles from './style'

const MediaLibraryScreen:React.FC<T_MEDIA_LIBRARY_SCREEN> = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <TabHeader title="Media Library" />
    </View>
    </ScreenWrapper>
  )
}

export default MediaLibraryScreen