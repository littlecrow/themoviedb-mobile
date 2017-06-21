import { StackNavigator } from 'react-navigation';
import MoviesScreen from '../Containers/MoviesScreen';
//import MovieDetailScreen from '../Containers/MovieDetailScreen';
import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MoviesScreen: {
    screen: MoviesScreen,
    navigationOptions: {
      title: 'Movies List'
    }
  },
  // MovieDetailScreen: {
  //   screen: MovieDetailScreen,
  //   navigationOptions: {
  //     title: 'Movie Detail'
  //   }
  // }
}, {
  // Default config for all screens
  //headerMode: 'screen',
  initialRouteName: 'MoviesScreen',
  navigationOptions: {
    headerStyle: styles.header,
    //headerTitleStyle: styles.title,
  }
});

export default PrimaryNav;
