import React from 'react'
import { Text } from 'react-native'

const Page2 = ({ route }) => {
    const name = route?.params?.name;
    return <Text>This is {name ? `${name}'s` : 'your'} profile</Text>;
}

export default Page2
