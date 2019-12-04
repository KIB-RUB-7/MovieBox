// Components/Search.js




import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
//import films from '../Helpers/filmsData.js'  //we import movies from filmsData, from Helpers folder
import FilmItem from './FilmItem.js'         //we import movie items from FilmsItems.js
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi.js'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "" // Initialization of our searchedText data out of the state
    this.state = {
      films: []
      isLoading: false
    }
  }

  _loadFilms() {
    this.setState({isLoading: true})      // isLoading : true = it loads when the search is in progress ...
      if (this.searchedText.length > 0) { // Only if the searched text is not empty
        getFilmsFromApiWithSearchedText(this.searchedText).then(data =>
            this.setState({
              films: data.results,
              isLoading: false
          })
        )
      }
    }

  _searchTextInputChanged(text) {
    this.searchedText = text  // Modification of the searched text at each text entry, without going through the setState as before
  }
  render() {
   console.log("this.state.isLoading")
   return (
     <View style={styles.main_container}>
       <TextInput
         style={styles.textinput}
         placeholder='Movie Title'
         onChangeText={(text) => this._searchTextInputChanged(text)}
         onSubmitEditing={() => this._loadFilms()}  //This line allows us to launch a search just by clicking the enter button on the keyboard
       />
       <Button title='search' onPress={() => this._loadFilms()}/>
       <FlatList
         data={this.state.films}
         keyExtractor={(item) => item.id.toString()}
         renderItem={({item}) => <FilmItem film={item}/>}
       />
     </View>
   )
 }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1,
  },
  textinput:{
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor:'#000000',
    borderWidth:1,
    paddingLeft: 5
  }
})

export default Search
