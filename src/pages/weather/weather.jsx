import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View } from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './weather.scss'

export default class Weather extends Component {

  state = {
    latitude: 0,
    longitude: 0
  }

  async componentWillMount () {
    await this.getLocation()
    await this.getAddress()
    await this.getWeather()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  async getLocation () {
    const location = await Taro.getLocation({
      type: 'wgs84'
    })
    this.setState(pre => {
      console.log(pre)
      return {
        latitude: location.latitude,
        longitude: location.longitude
      }
    })
  }

  async getAddress () {

  }

  async getWeather () {
    console.log(this.state)
    const res = await Taro.request({
      url: `https://weatherapi.market.xiaomi.com/wtr-v3/weather/all?latitude=${this.state.latitude}&longitude=${this.state.longitude}&appKey=weathercn:101010100&isGlobal=false&sign=zUFJoAR2ZVrDy1vF3D07&locale=zh_cn`,
      method: 'POST'
    })
    console.log(res)
  }

  render () {
    return (
      <View className='weather'>
      </View>
    )
  }
}
