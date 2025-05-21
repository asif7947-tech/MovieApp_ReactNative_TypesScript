import { StyleSheet } from 'react-native'
import { typography } from '../../theme/typography';

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 8,
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: '#3B82F6',
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    ...typography.SEMI_BOLD.F_18,
  },
});

export default styles