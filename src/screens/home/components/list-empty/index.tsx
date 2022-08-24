import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ListEmptyProps {
  loading: boolean;
}

const ListEmpty: React.FC<ListEmptyProps> = ({loading}) => {
  return (
    <View style={styles.constainer}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text>No Items to show</Text>
      )}
    </View>
  );
};

export default ListEmpty;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
