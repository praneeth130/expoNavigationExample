import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Right, Tabs, Tab, Body, Icon, Button } from 'native-base';
import Screen1Tab1 from './Screen1Tab1';
import Screen1Tab2 from './Screen1Tab2';

export default class Screen1 extends React.Component {
    render() {
        return (
            <Container>
                <Header hasTabs style={{ backgroundColor: '#2C2663', height: 80 }}>

                    <Left>
                        <Button style={{ backgroundColor: '#2C2663', top: 10, }}
                            onPress={() => this.props.navigation.openDrawer()} rounded>
                            <Icon name="menu" /></Button>
                    </Left>

                    <Body style={{ width: 40 }}>
                        <Text style={{ color: '#fff', fontSize: 18, width: '200%', top: 10 }}>Screen1</Text>
                    </Body>

                </Header>

                <Tabs>
                    <Tab heading='S1Tab1'>
                        <Screen1Tab1 />
                    </Tab>
                    <Tab heading='S2Tab2'>
                        <Screen1Tab2 />
                    </Tab>
                </Tabs>
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