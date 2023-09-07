<template>
  <div class="m-card" :style="width?{width:width+'px'}:{}">
    <div class="m-card-img" :style="imgHeight?{height:height+'px'}:{}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div class="m-card-summary">
      <template v-if="summary">
        {{ summary }}
      </template>
      <slot v-else></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'm-card',
  props: {
    width: {//卡片宽度
      type: Number,
      default: 0
    },
    imgSrc: {//卡片图片地址
      type: String,
      default:''
    },
    imgHeight: {//卡片高度
      type: Number,
      default:0
    },
    summary: {//卡片概要
      type: String,
      default:''
    }
  },
  data() {
      return {};
  },
  computed: {},
  methods: {}
};
</script>

<style>
@import "./card.scss";
</style>