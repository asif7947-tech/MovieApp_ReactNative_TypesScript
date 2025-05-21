import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../theme/responsive';
import { COLORS } from '../../theme/colors';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(12),
    marginTop: verticalScale(50),
  },
  title: {
    ...typography.BOLD.F_24,
    color: COLORS.TabHeadingColor,
    lineHeight: verticalScale(24),
    fontWeight: '700',
  },
});
