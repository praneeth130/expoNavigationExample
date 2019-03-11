import React from 'react';
import { View, Text, Image } from 'react-native';
// import Image from 'react-native-remote-svg';

export default class MainDrawer extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={{ width: '100%', height: '100%', backgroundColor: '#2C2663' }}>
                <View style={{ left: '7%', top: '10%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* <Image source={require('../assets/images/user_pic.svg')} /> */}
                        <Text style={{ color: '#fff', fontSize: 25, flexDirection: 'row', top: '10%' }}> Someone</Text>
                    </View>
                    <View style={{ width: '80%', borderBottomWidth: 1, borderBottomColor: '#C0C0C0', top: '20%' }} />
                    <Text style={{ color: '#C0C0C0', fontSize: 11, top: '30%' }}>
                        {`The last update was March 1, 2019. Please find a wireless \n connection so we can get your data submitted!`}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: '40%' }}>
                        {/* <Image style={{ width: 30, height: 30 }} source={require('../assets/images/leader_dashboard_Icon.svg')} /> */}
                        <Text style={{ color: '#fff', fontSize: 20, flexDirection: 'row', top: '10%' }}
                            onPress={() => this.props.navigation.navigate('screen1')}> S1</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: '50%' }}>
                        {/* <Image style={{ width: 30, height: 30 }} source={require('../assets/images/sales_notification_icon.svg')} /> */}
                        <Text style={{ color: '#fff', fontSize: 20, flexDirection: 'row', top: '10%' }}
                            onPress={() => this.props.navigation.navigate('screen2')}
                        > S2</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: '60%' }}>
                        {/* <Image style={{ width: 30, height: 30 }} source={require('../assets/images/calc_RFQ_icon.svg')} /> */}
                        <Text style={{ color: '#fff', fontSize: 20, flexDirection: 'row', top: '10%' }}
                            onPress={() => this.props.navigation.navigate('screen3')}
                        > S3</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: '70%' }}>
                        {/* <Image style={{ width: 30, height: 30 }} source={require('../assets/images/target_product_icon.svg')} /> */}
                        <Text style={{ color: '#fff', fontSize: 20, flexDirection: 'row', top: '10%' }}
                            onPress={() => this.props.navigation.navigate('screen4')}> S4</Text>
                    </View>
                </View>
            </View>);
    }
}
