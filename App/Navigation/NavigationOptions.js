import styles from './Styles/NavigationStyles';
import { Metrics } from '../Themes';
import Menu from '../Components/Drawer/Menu';

export const AppNavigationOptions = {
  contentComponent: Menu,
  drawerWidth: Metrics.screenWidth * 0.75
};

export const DiscoverNavigationOptions = {
  // Default config for all screens
  // initialRouteName: 'DiscoverScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title,
    headerBackTitleStyle: styles.back
  },
};
