import { createStackNavigator, createAppContainer } from 'react-navigation-stack'
import Search from '../Components/Search'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigatorOptions: {
      title: "Rechercher"
    }
  }
})

export default createAppContainer(SearchStackNavigator)
