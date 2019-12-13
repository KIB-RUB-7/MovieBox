// Navigation/Navigation.js

import { CreateStackNavigator, CreateAppContainer } from 'react-navigation-stack'
import Search from '../Components/Search'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search'
    }
  }
})

export default CreateAppContainer(SearchStackNavigator)
