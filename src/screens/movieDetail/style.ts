import { StyleSheet } from 'react-native';
import { typography } from '../../theme/typography';
import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive';
import { COLORS } from '../../theme/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  poster: { height: 400, justifyContent: 'flex-end' },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 16,
    position: 'absolute',
    top: 0,
  },
  backText: { color: '#fff', fontSize: 16, marginStart: horizontalScale(12), fontWeight: '600' },
  posterContent: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    padding: 16,
    alignItems: 'center',
  },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  subTitle: { ...typography.REGULAR.F_18,  fontWeight: '500', color: '#eee', marginVertical: 8, fontFamily: 'Poppins' },
  primaryButton: {
    width: '60%',
    backgroundColor: '#49BDFE',
    paddingVertical: verticalScale(12),
    borderRadius: 8,
    marginTop: 10,
  },
  primaryText: { color: '#fff', ...typography.BOLD.F_16, fontWeight: '600', textAlign: 'center' },
  secondaryButton: {
    flexDirection: 'row',
    borderColor: '#49BDFE',
    width: '60%',
    borderWidth: 1,
    paddingVertical: verticalScale(12),
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  secondaryText: { color: '#49BDFE', fontWeight: '600', textAlign: 'center' },
  body: { padding: 16 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
  },
  overviewText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
//   genreContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 8,
//     marginBottom: 12,
//   },

  genreContainer: {
        flexDirection: 'row',
        gap: moderateScale(20),
        justifyContent: 'center',
      },
      genreBox: {
        borderColor: COLORS.Orange,
        backgroundColor: COLORS.Yellow,
        borderWidth: 2,
        paddingHorizontal: horizontalScale(24),
        paddingVertical: verticalScale(2),
        borderRadius: moderateScale(20),
      },
      genreText: {
        ...typography.BOLD.F_12,
        alignSelf: 'center',
        color: COLORS.White,
        paddingVertical: verticalScale(6),
      },
      tagline: {
        ...typography.THIN.F_12,
        fontStyle: 'italic',
        color: COLORS.White,
        marginHorizontal: horizontalScale(32),
        marginVertical: verticalScale(16),
        textAlign: 'center',
      },
  genreTag: {
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
});
export default styles;