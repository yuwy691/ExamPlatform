import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';


import {connect} from 'react-redux';
import {changeText} from './redux/actions/index';


class Main extends Component {
    state = {
        selectedTab: 'Event'
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Log'}
                        title="Log"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: 'red'}]}/>}
                        onPress={() => this.setState({selectedTab: 'Log'})}>
                        <View style={styles.page0}>
                            <Text style={{fontSize: 18, padding: 15, color: 'blue'}}>This is Log Page</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Device'}
                        title="Device"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: 'red'}]}/>}
                        onPress={() => this.setState({selectedTab: 'Device'})}>
                        <View style={styles.page1}>
                            <Text style={{fontSize: 18, padding: 15, color: '#fff'}}>This is Device Page</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'User'}
                        title="User"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: 'red'}]}/>}
                        onPress={() => this.setState({selectedTab: 'User'})}>
                        <View style={styles.page1}>
                            <Text style={{fontSize: 18, padding: 15, color: '#fff'}}>This is User Page</Text>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'red'
    },
    icon: {
        width: 22,
        height: 22
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    }
});

// 获取 state 变化
const mapStateToProps = (state) => {
    return {
        value: state.text,
    }
};

// 发送行为
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeText: () => dispatch(changeText('外部传值')),
    }
};

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(mapStateToProps, mapDispatchToProps)(Main);