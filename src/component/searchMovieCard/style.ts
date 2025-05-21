import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,

  },
  thumbnail: {
    width: 130,
    height: 100,
    marginRight: 10,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    maxWidth: 200,
  },
  genre: {
    fontSize: 14,
    color: '#888',
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
});

export default styles;