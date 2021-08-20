import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View } from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './detail.scss'

export default class Detail extends Component {

  $instance = Taro.getCurrentInstance()

  async componentWillMount () {
    const res = await Taro.request({
      url: 'https://query.asilu.com/today/list',
      method: 'GET'
    })
    console.log(res.data.data)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='detail'>
      </View>
    )
  }
}
