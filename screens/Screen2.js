import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Right, Body, Icon, Button } from 'native-base';

export default class Screen2 extends React.Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#2C2663', height: 80 }}>

                    <Left>
                        <Button style={{ backgroundColor: '#2C2663', top: 10, }}
                            onPress={() => this.props.navigation.openDrawer()} rounded>
                            <Icon name="menu" /></Button>
                    </Left>

                    <Body style={{ width: 40 }}>
                        <Text style={{ color: '#fff', fontSize: 18, width: '200%', top: 10 }}>Screen2</Text>
                    </Body>

                </Header>

                <View style={styles.container}>
                    <Text>This is Screen2 twoooo</Text>
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