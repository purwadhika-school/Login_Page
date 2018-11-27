// Class Component
import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  AsyncStorage,
  TouchableOpacity
} from "react-native"

// OOP
class App extends Component {
  // 1
  constructor(props) {
    super(props)

    this.state = {
      name: "Yogie",
      isShowLoading: true
    }
    const name = "abc"
    console.log(name)
  }

  // 2
  componentWillMount() {
    // console.log(name) Wrong
    console.log(this.state.name)
  }

  // 4
  componentDidMount() {
    // console.log(name) Wrong
    console.log(this.state.name)
  }

  manipulateLoadingState = () => {
    this.setState({ isShowLoading: !this.state.isShowLoading })
  }

  tampilkanNamaUser = ( ) => {

  }

  // 3
  render() {
    return (
      <View>
        <Image
          style={{
            width: 210,
            height: 120,
            resizeMode: "contain",
            alignSelf: "center"
          }}
          source={{
            uri:
              "https://cdn.logosgalaxy.com/wp-content/uploads/2017/06/63%20-%20PNG%20coffee%20copy.jpg"
          }}
        />
        <Text style={{ textAlign: "center" }}>Login Page </Text>

        {/* Conditional Render */}
        {this.state.isShowLoading && (
          <View>
            <ActivityIndicator size="large" style={{ marginTop: 15 }} />
            <Text>{this.state.name}</Text>
          </View>
        )}

        <TouchableOpacity
          onPress={ () => this.manipulateLoadingState()}
          style={{
            borderRadius: 3,
            borderWidth: 1,
            backgroundColor: "green",
            width: "90%",
            alignSelf: "center"
          }}
        >
          <Text style={[Styles.txtButton, { textDecorationStyle: "dotted" }]}>
            {/* Ternary operator */}
            {this.state.isShowLoading ? 
              'Hide Loading Spinner' : 
              'Show Loading Spinner' } 
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  txtButton: {
    color: "white",
    textAlign: "center",
    margin: 5,
    fontSize: 18
  }
})

export default App

// // Functional Component
// import React from 'react'
// import { View } from 'react-native'

// const App = () => {
//   return (
//     <View />
//   )
// }

// export default App

// Component ada 2 jenis:
// 1. Class Component
// 2. Functional Component

// Class Component:
// 1. State
// 2. Lifecycle


// JS == 


