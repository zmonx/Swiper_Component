# Swiper_Component
React Native Swiper Component
<hr>


<p align="center">
  <img alt="react-native-swiper" src="http://i.imgur.com/P4cRUgD.png" width="208">
</p>

<p align="center">
  The best Swiper component for React Native.
</p>

<p align="center">
  <a href="http://standardjs.com/"><img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/react-native-swiper"><img alt="npm version" src="http://img.shields.io/npm/v/react-native-swiper.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/react-native-swiper"><img alt="npm version" src="http://img.shields.io/npm/dm/react-native-swiper.svg?style=flat-square"></a>
  <a href="https://github.com/leecade/react-native-swiper/pulls?q=is%3Apr+is%3Aclosed"><img alt="PR Stats" src="https://img.shields.io/issuestats/i/github/leecade/react-native-swiper.svg?style=flat-square"></a>
  <a href="https://github.com/leecade/react-native-swiper/issues?q=is%3Aissue+is%3Aclosed"><img alt="Issue Stats" src="https://img.shields.io/issuestats/p/github/leecade/react-native-swiper.svg?style=flat-square"></a>
  <a href="https://gitter.im/leecade/react-native-swiper?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"><img alt="Join the chat" src="https://badges.gitter.im/leecade/react-native-swiper.svg"></a>
</p>




### Basic Usage

- Install `react-native` first

```
> npm i react-native-cli -g
```

- Initialization of a react-native project

```
> react-native init "Project Name"
```

### Installation

> v1.5.14

```
> npm i react-native-swiper --save
```

> v1.6.0-rc

```
> npm i --save react-native-swiper@next
```

## Example Code >> Basic Swiper-Component

- Then, edit `"Project Name"/App.js`, like this:

```jsx

import React from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () => (
  <Swiper style={styles.wrapper} showsButtons loop={false}>
    <View testID="Hello" style={styles.slide1}>
      <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View testID="Beautiful" style={styles.slide2}>
      <Text style={styles.text}>Beautiful</Text>
    </View>
    <View testID="Simple" style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>
  </Swiper>
)
```


### Example Display >> Basic Swiper-Component

![](http://i.imgur.com/zrsazAG.gif=300x)

##  Other Swiper-Component Examples

### [examples/components/Swiper](https://github.com/leecade/react-native-swiper/blob/master/examples/components/Swiper)

![](http://i.imgur.com/hP3f3oO.gif=300x)

### [examples/components/SwiperNumber](https://github.com/leecade/react-native-swiper/blob/master/examples/components/SwiperNumber)

![](http://i.imgur.com/0rqESVb.gif=300x)

### [examples/components/Phone](https://github.com/leecade/react-native-swiper/blob/master/examples/components/Phone)

![](http://i.imgur.com/c1BhjZm.gif=300x)

### [examples/components/LoadMinimal](https://github.com/leecade/react-native-swiper/blob/master/examples/components/LoadMinimal)

![](http://i.imgur.com/LAOHbJA.gif=300x)

##
## Properties

#### Basic

| Prop           |     Default     |   Type   | Description                                                                                                 |
| :------------- | :-------------: | :------: | :---------------------------------------------------------------------------------------------------------- |
| horizontal     |      true       |  `bool`  | If `true`, the scroll view's children are arranged horizontally in a row instead of vertically in a column. |
| loop           |      true       |  `bool`  | Set to `false` to disable continuous loop mode.                                                             |
| index          |        0        | `number` | Index number of initial slide.                                                                              |
| showsButtons   |      false      |  `bool`  | Set to `true` make control buttons visible.                                                                 |
| autoplay       |      false      |  `bool`  | Set to `true` enable auto play mode.                                                                        |
| onIndexChanged | (index) => null |  `func`  | Called with the new index when the user swiped                                                              |

#### Custom basic style & content

| Prop              |         Default         |   Type    | Description                                                                |
| :---------------- | :---------------------: | :-------: | :------------------------------------------------------------------------- |
| width             |            -            | `number`  | If no specify default enable fullscreen mode by `flex: 1`.                 |
| height            |            -            | `number`  | If no specify default fullscreen mode by `flex: 1`.                        |
| style             |          {...}          |  `style`  | See default style in source.                                               |
| containerStyle    |          {...}          |  `style`  | See default container style in source.                                     |
| loadMinimal       |          false          |  `bool`   | Only load current index slide , `loadMinimalSize` slides before and after. |
| loadMinimalSize   |            1            | `number`  | see `loadMinimal`                                                          |
| loadMinimalLoader | `<ActivityIndicator />` | `element` | Custom loader to display when slides aren't loaded                         |

#### Pagination

| Prop             |                                                                          Default                                                                          |    Type    | Description                                                                                                                                                                                   |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| showsPagination  |                                                                           true                                                                            |   `bool`   | Set to `true` make pagination visible.                                                                                                                                                        |
| paginationStyle  |                                                                           {...}                                                                           |  `style`   | Custom styles will merge with the default styles.                                                                                                                                             |
| renderPagination |                                                                             -                                                                             | `function` | Complete control how to render pagination with three params (`index`, `total`, `context`) ref to `this.state.index` / `this.state.total` / `this`, For example: show numbers instead of dots. |
| dot              | `<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />` | `element`  | Allow custom the dot element.                                                                                                                                                                 |
| activeDot        |   `<View style={{backgroundColor: '#007aff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />`    | `element`  | Allow custom the active-dot element.                                                                                                                                                          |
| dotStyle         |                                                                             -                                                                             |  `object`  | Allow custom the dot element.                                                                                                                                                          |
| dotColor         |                                                                             -                                                                             |  `string`  | Allow custom the dot element.                                                                                                                                                          |
| activeDotColor   |                                                                             -                                                                             |  `string`  | Allow custom the active-dot element.                                                                                                                                                          |
| activeDotStyle   |                                                                             -                                                                             |  `object`  | Allow custom the active-dot element.                                                                                                                                                          |

#### Autoplay

| Prop              | Default |   Type   | Description                                      |
| :---------------- | :-----: | :------: | :----------------------------------------------- |
| autoplay          |  true   |  `bool`  | Set to `true` enable auto play mode.             |
| autoplayTimeout   |   2.5   | `number` | Delay between auto play transitions (in second). |
| autoplayDirection |  true   |  `bool`  | Cycle direction control.                         |

#### Control buttons

| Prop               |                                                                                                   Default                                                                                                   |   Type    | Description                                 |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------: | :------------------------------------------ |
| showsButtons       |                                                                                                    true                                                                                                     |  `bool`   | Set to `true` make control buttons visible. |
| buttonWrapperStyle | `{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center'}` |  `style`  | Custom styles.                              |
| nextButton         |                                                                                 `<Text style={styles.buttonText}>›</Text>`                                                                                  | `element` | Allow custom the next button.               |
| prevButton         |                                                                                 `<Text style={styles.buttonText}>‹</Text>`                                                                                  | `element` | Allow custom the prev button.               |

#### Props of Children

| Prop  |               Default                |   Type    | Description                                                    |
| :---- | :----------------------------------: | :-------: | :------------------------------------------------------------- |
| style |                {...}                 |  `style`  | Custom styles will merge with the default styles.              |
| title | {<Text numberOfLines={1}>...</Text>} | `element` | If this parameter is not specified, will not render the title. |

#### Basic props of `<ScrollView />`

| Prop                             | Default |  Type  | Description                                                                                                                                                                                                                                     |
| :------------------------------- | :-----: | :----: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| horizontal                       |  true   | `bool` | If `true`, the scroll view's children are arranged horizontally in a row instead of vertically in a column.                                                                                                                                     |
| pagingEnabled                    |  true   | `bool` | If true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for horizontal pagination.                                                                                                               |
| showsHorizontalScrollIndicator   |  false  | `bool` | Set to `true` if you want to show horizontal scroll bar.                                                                                                                                                                                        |
| showsVerticalScrollIndicator     |  false  | `bool` | Set to `true` if you want to show vertical scroll bar.                                                                                                                                                                                          |
| bounces                          |  false  | `bool` | If `true`, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction. If `false`, it disables all bouncing even if the alwaysBounce\* props are true. |
| scrollsToTop                     |  false  | `bool` | If true, the scroll view scrolls to top when the status bar is tapped.                                                                                                                                                                          |
| removeClippedSubviews            |  true   | `bool` | If true, offscreen child views (whose overflow value is hidden) are removed from their native backing superview when offscreen. This canimprove scrolling performance on long lists.                                                            |
| automaticallyAdjustContentInsets |  false  | `bool` | Set to `true` if you need adjust content insets automation.                                                                                                                                                                                     |
| scrollEnabled                    |  true   | `bool` | Enables/Disables swiping                                                                                                                                                                                                                        |

> @see: http://facebook.github.io/react-native/docs/scrollview.html

#### Supported ScrollResponder

| Prop                |          Params           |    Type    | Description                                                 |
| :------------------ | :-----------------------: | :--------: | :---------------------------------------------------------- |
| onScrollBeginDrag   | `e` / `state` / `context` | `function` | When animation begins after letting up                      |
| onMomentumScrollEnd | `e` / `state` / `context` | `function` | Makes no sense why this occurs first during bounce          |
| onTouchStartCapture | `e` / `state` / `context` | `function` | Immediately after `onMomentumScrollEnd`                     |
| onTouchStart        | `e` / `state` / `context` | `function` | Same, but bubble phase                                      |
| onTouchEnd          | `e` / `state` / `context` | `function` | You could hold the touch start for a long time              |
| onResponderRelease  | `e` / `state` / `context` | `function` | When lifting up - you could pause forever before \* lifting |

##

## REFERENCE

```
[Link to learn more : ]("https://github.com/leecade/react-native-swiper")
```