import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtButton, AtCalendar } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss"
import "taro-ui/dist/style/components/calendar.scss"
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {

    async function handleClick (path) {
      await Taro.navigateTo({url: `/pages/${path}/${path}`})
    }

    return (
      <View className='index'>
        <AtCalendar isVertical />
        <View className='button-group'>
          <AtButton type='secondary' onClick={() => handleClick('history')}>历史上的今天</AtButton>
          <AtButton type='primary' onClick={() => handleClick('weather')}>今日天气</AtButton>
        </View>
      </View>
    )
  }
}
