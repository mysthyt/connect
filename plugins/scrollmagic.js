/* eslint-disable import/no-webpack-loader-syntax */
import Vue from 'vue'
import * as ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

const GSAPScrollMagic = {
  install(Vue) {
    // gsap
    Vue.prototype.$gsap = {
      TweenMax,
      TimelineMax,
    }
    // ScrollMagic
    Vue.prototype.$scrollmagic = {
      Controller: new ScrollMagic.Controller(),
      Scene: ScrollMagic.Scene,
    }
  },
}

Vue.use(GSAPScrollMagic)
