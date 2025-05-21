import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../theme/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom:verticalScale(16),
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 8,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },

  backButton: {
    width: 28,
    height: 28,
    marginStart:verticalScale(6),
  },
  headerTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '500',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#70bdf0',
    textAlign: 'center',
    marginVertical: 6,
  },
    mainContainer: {
    backgroundColor: '#F6F6FA',
    flex: 1,
    marginTop:verticalScale(4),
    paddingTop: verticalScale(16),
    paddingHorizontal: horizontalScale(12),
    paddingBottom: verticalScale(10),
  },
  dateLabel: {
    marginTop:verticalScale(80),
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '500',
    marginBottom: 6,
    marginStart: verticalScale(12),
  },
  dateRow: {
    marginHorizontal:horizontalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  dateButton: {
    margin: 4,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  selectedDateButton: {
    backgroundColor: '#5bc3f0',
    shadowColor: '#5bc3f0',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
  },
  selectedDateText: {
    color: 'white',
  },
  hallCard: {
    width: 300,
    padding: 12,
    height: 240,
    marginHorizontal: verticalScale(12),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:verticalScale(12),
  },
  hallContainer: {
    flexDirection: 'column',
  },
  selectedHallCard: {
    borderColor: '#5bc3f0',
    shadowColor: '#5bc3f0',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  hallTime: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  hallName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
    marginStart:verticalScale(8),
  },
  hallImage: {
    width: 240,
    height: 190,
    marginVertical: 8,
  },
  priceText: {
    fontSize: 13,
    color: '#888',
    marginTop: 8,
  },
  bold: {
    fontWeight: '700',
    color: '#000',
  },
  button: {
    marginTop: 'auto',
    backgroundColor: '#5bc3f0',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
export default styles;