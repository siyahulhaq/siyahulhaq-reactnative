import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    padding: 10,
    maxHeight: 60,
  },
  fab: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    borderRadius: 50,
    paddingHorizontal: 13,
    paddingBottom: 5,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'black',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 15,
  },
  fabbtn: {
    fontSize: 50,
    color: 'white',
  },
  categoryButton: {
    padding: 10,
    marginRight: 10,
    maxHeight: 50,
    elevation: 3,
    shadowColor: 'rgba(0, 0, 0,0.4)',
    shadowOffset: {height: 5, width: 5},
    shadowRadius: 15,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  categoryButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
