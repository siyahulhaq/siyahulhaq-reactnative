import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: 'white',
  },
  productDetailsContainer: {
    backgroundColor: '#000000',
    padding: 20,
    elevation: 4,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: '#0000000A',
    flexGrow: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowRadius: 15,
  },
  productName: {
    fontSize: 26,
    fontWeight: '700',
    color: 'grey',
    marginBottom: 20,
    maxWidth: '70%',
  },
  productPrice: {
    fontSize: 33,
    color: 'white',
  },
  productMainDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  productDescription: {
    color: 'white',
    fontSize: 18,
  },
});

export default styles;
