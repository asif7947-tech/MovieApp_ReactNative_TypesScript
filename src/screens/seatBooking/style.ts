import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";
import { typography } from "../../theme/typography";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/responsive";

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
  legendContainer: {
    marginBottom: verticalScale(24),
    flexDirection: 'column'
  },
  seatMap: {
    alignSelf: "center",
    marginVertical: verticalScale(12),
    backgroundColor: "#F7F7FA",
    borderRadius: 16,
    paddingVertical: verticalScale(8),
    paddingBottom:verticalScale(40),
    width: '100%',
    
  },
  screenLabel: {
    alignSelf: "center",
    color: "#A0A4B8",
    marginBottom: 8,
    fontSize: 12,
    letterSpacing: 1,
  },
  seatRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 2,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: horizontalScale(30),
    
  },
  icon: {
    width: 28,
    height: 22,
    marginRight: 8,
    resizeMode: 'contain',
  },
  label: {
    color: '#8B8B8B',
    fontSize: 17,
    fontWeight: '600',
  },
  seat: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginHorizontal: 4,
    marginVertical: 2,
    backgroundColor: "#61C3F2", // default: not available
    borderWidth: 1,
    borderColor: "#61C3F2",
  },
  regularSeat: {
    backgroundColor: "#7EC4FA",
    borderColor: "#7EC4FA",
  },
  vipSeat: {
    backgroundColor: "#4B367C",
    borderColor: "#4B367C",
  },
  selectedSeat: {
    backgroundColor: "#C9A74B",
    borderColor: "#C9A74B",
  },
  unavailableSeat: {
    backgroundColor: "#E5E7EB",
    borderColor: "#E5E7EB",
    opacity: 0.5,
  },
  unselectedSeat: {
    backgroundColor: "#61C3F2",
    borderColor: "#61C3F2",
  },
  legend: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal: 8,
  },
  
  selectionInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 24,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  footerContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: 12,
    paddingBottom: 24,
    paddingHorizontal: 18,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
    elevation: 4,
  },
  legendRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 6,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
    marginBottom: 4,
  },
  legendSeat: {
    width: 22,
    height: 14,
    borderRadius: 3,
    marginRight: 6,
    borderWidth: 2,
    borderColor: "#F7F7FA",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  legendLabel: {
    color: "#8B8B8B",
    fontSize: 15,
    fontWeight: "500",
  },
  selectedSeatBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#F7F7FA",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: 10,
  },
  selectedSeatText: {
    fontSize: 17,
    color: "#1A2B4D",
    fontWeight: "500",
    marginRight: 10,
  },
  pricePayRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  priceBox: {
    backgroundColor: "#F7F7FA",
    borderRadius: 10,
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(12),
    marginRight: 12,
    alignItems: "flex-start",
    flex: 1,
  },
  priceLabel: {
    color: "#8B8B8B",
    fontSize: 15,
    marginBottom: 2,
  },
  priceValue: {
    color: "#1A2B4D",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Poppins',
  },
  payButton: {
    backgroundColor: "#7EC4FA",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: horizontalScale(20),
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  payButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;