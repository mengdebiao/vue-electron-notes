/*
 * @Description: fortawesome 图标库
 * @Author: sufen
 * @Date: 2020-05-21 09:55:29
 * @LastEditTime: 2020-05-21 10:06:46
 * @LastEditors: sufen
 */
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
// import { faUserSecret } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faMarkdown)

Vue.component('font-awesome-icon', FontAwesomeIcon)
