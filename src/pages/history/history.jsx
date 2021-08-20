import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtCard } from "taro-ui"

import "taro-ui/dist/style/components/card.scss"
import './history.scss'
import deathImg from '../../static/death.png'
import birthImg from '../../static/birth.png'
import eventImg from '../../static/event.png'

export default class History extends Component {
  state = {
    historyList: []
  }
  componentWillMount () {}

  async componentDidMount () {
    const res = await Taro.request({
      url: 'https://query.asilu.com/today/list',
      method: 'GET'
    })
    console.log(res.data.data)
    this.setState(pre => {
      console.log(pre)
      return {
        historyList: res.data.data
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='history'>
          {
          this.state.historyList.map((item, index) =>
            <View key={index} className='cardWrap'>
              <AtCard
                extraStyle={{color: '#6190e8'}}
                extra={`${item.year}年`}
                thumb={item.type === 'event' ? eventImg : item.type === 'death' ? deathImg : birthImg}
                title={item.type === 'event' ? '事件' : item.type === 'death' ? '逝世' : '出生'}
              >
                {item.title}
              </AtCard>
            </View>
          )
          }
      </View>
    )
  }
}

// <AtListItem
//   key={index}
//   title={item.title}
//   note={`${item.year}年`}
//   extraText={item.type === 'event' ? '事件' : item.type === 'death' ? '逝世' : '出生'}
//   arrow='right'
//   iconInfo={{ size: 25, value: 'link', }}
// />
