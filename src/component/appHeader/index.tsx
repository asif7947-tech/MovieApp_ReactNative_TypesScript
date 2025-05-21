import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./style";
import { T_App_Header } from "./type";
import { COLORS } from "../../theme/colors";
import React from "react";

const AppHeader: React.FC<T_App_Header> = ({headerTitle,header_bg_color,onBackPress,onMenuPress}) => {
      return (
        <View style={[styles.container, {backgroundColor: header_bg_color}]}>
          <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
            <Ionicons name="arrow-back" size={24} color={COLORS.White} />
          </TouchableOpacity>
          <Text style={styles.title}>{headerTitle}</Text>
          {
            onMenuPress? <TouchableOpacity onPress={onMenuPress} style={styles.iconContainer}>
            <Ionicons name="ellipsis-vertical" size={24} color={COLORS.White} />
          </TouchableOpacity> : <View></View>
          }
          
        </View>
      );
    };

export default AppHeader;