/*
 * @Description: nedb 数据模型
 * @Author: sufen
 * @Date: 2020-06-10 22:27:16
 * @LastEditTime: 2020-06-10 22:28:59
 * @LastEditors: sufen
 */
import Datastore from 'nedb-promises'
// import path from 'path'
// import { remote } from 'electron'

// console.log('数据存储路径：', remote.app.getPath('userData'))

// const basePath = remote.app.getPath('userData')

const db = {
  printTask: new Datastore({
    autoload: true,
    timestampData: true
    // filename: path.join(basePath, `db/${process.env.VUE_APP_ENV_CONFIG}/print_task_v${clientVersion}.db`)
  })
}

export default db
