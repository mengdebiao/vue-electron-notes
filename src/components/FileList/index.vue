<!--
 * @Description: 左侧文件列表组件
 * @Author: sufen
 * @Date: 2020-05-20 16:18:34
 * @LastEditTime: 2020-07-16 19:05:02
 * @LastEditors: sufen
 -->
<template>
  <div class="filelist-container">
    <el-scrollbar class="file-list" wrap-class="scrollbar-filelist" :noresize="false" tag="ul">
      <li
        v-for="(item, index) in fileList"
        :key="index"
        class="file-item"
        :class="{ active: index === activeIndex }"
        @click="handleChange(index)"
        @contextmenu.prevent="openMenu(item, index, $event)"
      >
        <font-awesome-icon :icon="['fab', 'markdown']" class="item-icon" />
        <p class="item-title">{{ item.title }}</p>
        <p class="is-top" v-if="item.isTop"><i class="el-icon-download" /></p>
        <p class="item-time">{{ item.updatedAt }}</p>
      </li>
    </el-scrollbar>
    <ul v-if="visible" :style="{ left: `${left}px`, top: `${top}px` }" class="contextmenu">
      <slot name="menu"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FileList',
  props: {
    fileList: {
      type: Array,
      default: () => []
    },
    active: Number,
    selectedFile: Object
  },
  data() {
    return {
      activeIndex: 0,
      visible: false,
      top: 0,
      left: 0
    }
  },
  watch: {
    active(newValue) {
      this.activeIndex = newValue
    },
    activeIndex(newValue) {
      this.$emit('update:active', newValue)
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  methods: {
    handleChange(index) {
      this.activeIndex = index
    },
    openMenu(fileItem, index, e) {
      const menuMinWidth = 105
      const { offsetWidth } = this.$el // 获取容器的宽
      const maxLeft = offsetWidth - menuMinWidth // 左侧边界
      const left = e.clientX + 15 // 15 => margin right

      this.left = left > maxLeft ? maxLeft : left
      this.top = e.clientY
      this.visible = true
      this.$emit('update:active', index)
      this.$emit('update:selectedFile', fileItem) // 将当前右键选中的文件返回父组件
    },
    closeMenu() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.file-list {
  user-select: none;
  .file-item {
    display: flex;
    align-items: center;
    height: 55px;
    border-bottom: 1px solid #eaeefb;

    &.active {
      background-color: #f4f4f5;
    }

    .item-icon {
      margin-left: 20px;
      margin-right: 12px;
    }

    .item-title {
      flex: 1;
      margin-right: 5px;
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .is-top {
      margin-right: 5px;
      transform: rotate(180deg);
      color: #ced4da;
    }
    .item-time {
      width: 80px;
      font-size: 12px;
    }
  }
}
</style>
<style lang="less">
.scrollbar-filelist {
  height: calc(100vh - 56px);
  overflow-x: hidden !important;
}
.el-scrollbar__bar {
  // opacity: 1;

  &.is-vertical {
    right: 0px;
    width: 5px;
    .el-scrollbar__thumb {
      background-color: rgba(144, 147, 153, 0.5);
    }
  }
}

.contextmenu {
  position: absolute;
  margin: 0;
  padding: 5px 0;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  list-style-type: none;
  color: #333;
  font-size: 12px;
  font-weight: 400;
  z-index: 3000;
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      color: #66b1ff;
      background: #ecf5ff;
    }
  }
}
</style>
