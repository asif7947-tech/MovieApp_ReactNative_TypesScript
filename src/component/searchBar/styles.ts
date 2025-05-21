import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../theme/responsive';
import { COLORS } from '../../theme/colors';

// This file contains the styles for the SearchBar component.

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6', // Light gray
    borderRadius: 32,
    borderWidth: 1.5,
    borderColor: '#EFEFEF',
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(8),
    marginVertical: verticalScale(12),
    marginHorizontal: horizontalScale(12),

  },
  icon: {
    marginHorizontal: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    paddingHorizontal: 8,
    paddingVertical: 0,
  },
});

export default styles;