import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    elevation: 4,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '43%',
    marginLeft: 15,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    aspectRatio: 1,
  },
  productDetailsContainer: {
    backgroundColor: '#4e5161',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  productName: {
    fontWeight: '600',
    color: 'white',
  },
  productPrice: {
    fontWeight: '700',
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
