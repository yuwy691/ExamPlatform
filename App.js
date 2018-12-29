import React, {Component} from 'react';

// 引用外部文件
import {Provider} from 'react-redux';
import Main from './src/Main';
import configureStore from './src/redux/stores/index';

// 调用 store 文件中的 mainReducer常量中保存的方法
const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            // 第一层包装,为了让 main 能够拿到 store
            <Provider store={store}>
                <Main/>
            </Provider>
        )
    }
}