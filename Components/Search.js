// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
//import films from '../Helpers/filmsData.js'  //we import movies from filmsData, from Helpers folder
import FilmItem from './FilmItem.js'         //we import movie items from FilmsItems.js
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi.js'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.page = 0
    this.totalPages = 0
    this.searchedText = "" // Initialization of our searchedText data out of the state
    this.state = {
      films: [],
      isLoading:false
    }
  }

  _loadFilms() {
      this.setState({ isLoading:true})
      if (this.searchedText.length > 0) { // Only if the searched text is not empty
        getFilmsFromApiWithSearchedText(this.searchedText，this.page+1).then(data => {
            this.page = data.page
            this.totalPages = data.total_pages
            this.setState({
              films: [ ...this.state.films, ...data.results ],  //I can also code like this -:- ~ films: this.state.films.concat(data.results),
              isLoading:false
            })
        })
      }
    }

  _displayLoading(){
    if (this.state.isLoading){
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
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
	       onSubmitEditing={() => this._loadFilms()}
         style={styles.textinput}
         placeholder='Movie Title'
         onChangeText={(text) => this._searchTextInputChanged(text)}
       />
       <Button title='search' onPress={() => this._loadFilms()}/>
       <FlatList
         data={this.state.films}
         keyExtractor={(item) => item.id.toString()}
         onEndReachTreashold={0.5}
         onEndReached={() => {
           console.log("onEndReached")
         } }
         renderItem={({item}) => <FilmItem film={item}/>}
       />
       {this._displayLoading()}
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
  },
  loading_container: {
    position:'absolute',
    left: 0,
    right: 0,
    top:100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search
