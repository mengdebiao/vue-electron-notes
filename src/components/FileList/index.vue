<!--
 * @Description: 左侧文件列表组件
 * @Author: sufen
 * @Date: 2020-05-20 16:18:34
 * @LastEditTime: 2020-06-17 15:17:06
 * @LastEditors: sufen
 -->
<template>
  <el-scrollbar class="file-list" wrap-class="scrollbar-filelist" :noresize="false" tag="ul">
    <li
      v-for="(item, index) in fileList"
      :key="index"
      class="file-item"
      :class="{ active: index === activeIndex }"
      @click="handleChange(index)"
    >
      <font-awesome-icon :icon="['fab', 'markdown']" class="item-icon" />
      <p class="item-title">{{ item.title }}</p>
      <p class="item-time">{{ item.updatedAt }}</p>
    </li>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'FileList',
  props: {
    fileList: {
      type: Array,
      default: () => []
    },
    active: Number
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  watch: {
    active(newValue) {
      this.activeIndex = newValue
    },
    activeIndex(newValue) {
      this.$emit('update:active', newValue)
    }
  },
  methods: {
    handleChange(index) {
      this.activeIndex = index
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
</style>
