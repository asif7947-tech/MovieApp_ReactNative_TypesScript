import { StyleSheet } from "react-native";
import {COLORS} from '../../theme/colors';
import { horizontalScale, verticalScale } from "../../theme/responsive";
import { typography } from "../../theme/typography";

export  const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(12),
  },
  title: {
    ...typography.SEMI_BOLD.F_16,
    color: COLORS.TabHeadingColor,
  },
  iconContainer: {
    paddingHorizontal: horizontalScale(2),
    paddingVertical: verticalScale(8)
  },
});