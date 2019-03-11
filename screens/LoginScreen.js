import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Container } from 'native-base';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Button primary block rounded onPress={() => this.props.navigation.navigate('drawer')}>
                        <Text> Login</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
