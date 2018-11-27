import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"

class Quiz extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShowData: true,
      Color: "Black",
      Type: "15 Inch",
      Brand: "Lenovo",
      Year: 2017
    }
  }

  changeStateValue = () => {
    this.setState({ isShowData: !this.state.isShowData })
  }

  render() {
    return (
      <View>
        { this.state.isShowData && <Text>{this.state.Color}</Text>}
        <Text>{this.state.Brand}</Text>
        <Text>{this.state.Type}</Text>
        { this.state.isShowData && <Text>{this.state.Year}</Text> }

        <TouchableOpacity onPress={() => this.changeStateValue()}>
          <Text>
            {this.state.isShowData
              ? "Hide Color and Year"
              : "Show Color and Year"}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Quiz

// Task:
// 1. Bikin state default ( Color: 'Black', Type: '15 Inch', Brand: 'Lenovo', Year: 2017  )
// 2. Didalam UI Layout, bikin TouchableOpacity yang ketika di-klik,
// akan menampilkan data Color dan Year

// const dataProfile = {
//     nama: "sadkhka"
// }

// // Condition 1
// Color: 'Black'
// Type: '15 Inch'
// Brand: 'Lenovo'
// Year: 2017

// ============ Button ===> Hide Color and Year ============

// // Condition 2
// Type: '15 Inch'
// Brand: 'Lenovo'
// ============ Button ===> Show Color and Year ============
