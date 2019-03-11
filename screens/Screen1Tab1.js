import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Right, Body, Icon, Button } from 'native-base';

export default class Screen1Tab1 extends React.Component {
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Text>This is Screen1 Oneeee Tab1 oneeeee</Text>
                </View>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#757575',
        alignItems: 'center',
        justifyContent: 'center',
    },
});