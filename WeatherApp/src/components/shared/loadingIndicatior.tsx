import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
interface ILoadingIndicatiorProps {
  apiLoading?: boolean;
  permissionLoading?: boolean;
  geoLocationLoading?: boolean;
}

const LoadingIndicatior = ({
  apiLoading,
  permissionLoading,
  geoLocationLoading,
}: ILoadingIndicatiorProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Progress.CircleSnail color={['red', 'green', 'blue']} />
      <Text>
        {permissionLoading
          ? 'Loading Permissions'
          : geoLocationLoading
          ? 'Getting your coordinates'
          : apiLoading
          ? 'Getting data from API'
          : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingIndicatior;
