import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import theme from '../../theme/theme';

export const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherIcon: {
    width: scale(150),
    height: scale(150),
    marginLeft: scale(20),
  },
  cityNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cityText: {
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
  },
  countryContainer: {
    position: 'absolute',
    top: 5,
    right: -20,
  },
  countryText: {
    fontSize: theme.fontSizes.small,
    fontWeight: 'bold',
  },

  descriptionText: {
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  temperatureText: {
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
    color: theme.colors.white,
    marginBottom: scale(20),
  },
});
