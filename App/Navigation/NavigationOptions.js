import styles from './Styles/NavigationStyles';
import { Metrics } from '../Themes';
import Menu from '../Components/Drawer/Menu';

export const DrawerNavigationOptions = {
  contentComponent: Menu,
  drawerWidth: Metrics.screenWidth * 0.75
};

export const AppNavigationOptions = {
  // Default config for all screens
  // initialRouteName: 'DiscoverScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title,
    headerBackTitleStyle: styles.back
  },
};
