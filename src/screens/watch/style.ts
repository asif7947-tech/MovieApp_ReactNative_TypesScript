import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../theme/responsive";
import { typography } from "../../theme/typography";


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerContainer: {
    paddingHorizontal: horizontalScale(12),
  },
  header: {
    marginTop: 50,
    paddingVertical: verticalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12)
  },
  headerTitle: {...typography.BOLD.F_24 , fontWeight: 'bold' },
  searchBar: {
    marginTop: 50,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    height: 40,
    fontSize: 16,

  },
  mainContainer: {
    backgroundColor: '#F6F6FA',
    flex: 1,
    marginTop:verticalScale(4),
    paddingTop: verticalScale(16),
    paddingHorizontal: horizontalScale(12),
    paddingBottom: verticalScale(10),
  },
  row: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  movieCard: {
    width: '48%',
    marginBottom: 12,
  },
  poster: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    marginTop: 4,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default styles;