import React, { Component } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import SearchBar from './widgets/SearchBar'
import ExpScrollView from './widgets/ExpScrollView'
import Users from '../const-data/Users'
import ExpFlatList from './widgets/ExpFlatList'
import ExpSectionList from './widgets/ExpSectionList'

export class MyFriends extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} style="light" />
            <View style={styles.header}>
                <SearchBar />
            </View>
            <View style={styles.body}>
                <ExpSectionList Users={Users} />
            </View>
        </SafeAreaView>
    )
  }
}

export default MyFriends

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    header: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        backgroundColor: "orange"
    },
    body: {
        flex: 10,
        backgroundColor: "green"
    }
})
