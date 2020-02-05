import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Search from './pages/Search';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Perséia'
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Pesquisa'
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: '#000',
      },
    },
  })
);

export default Routes;