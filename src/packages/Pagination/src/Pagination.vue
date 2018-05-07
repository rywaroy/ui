<template>
  <div class="yg-pagination">
    <div :class="currentPage === 1 ? 'yg-pager__item--disable' : 'yg-pager__item'" @click="prev()">
      <i class="iconfont icon-left"></i>
    </div>
    <ul class="yg-pager" @click="onPageClick($event)">
      <li :class="currentPage === 1 ? 'yg-pager__item--active' : 'yg-pager__item'">1</li>
      <li class="yg-pager__item" v-if="showPrevMore">...</li>
      <li :class="currentPage === item ? 'yg-pager__item--active' : 'yg-pager__item'" v-for="(item,index) in pagers" :key="index">
        {{item}}
      </li>
      <li class="yg-pager__item" v-if="showNextMore">...</li>
      <li :class="currentPage === pageCount ? 'yg-pager__item--active' : 'yg-pager__item'">{{pageCount}}</li>
    </ul>
    <div :class="currentPage === pageCount ? 'yg-pager__item--disable' : 'yg-pager__item'" @click="next()">
      <i class="iconfont icon-right"></i>
    </div>
    <div class="yg-pager__jump" v-if="pageCount > 7">
      <input type="text" class="yg-pager__input" v-model="targetPage">
      <div class="yg-pager__jump__btn" @click="jump()">跳转</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YgPagination',
  props: {
    currentPage: Number,
    pageCount: Number,
    maxPage: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      current: null,
      showPrevMore: false,
      showNextMore: false,
      targetPage: null,
    };
  },
  methods: {
    onPageClick(event) {
      const target = event.target;
      if (target.tagName === 'LI' && !isNaN(target.textContent) && target.textContent !== this.currentPage) {
        this.$emit('current-change', Number(target.textContent));
      }
    },
    jump() {
      if (isNaN(this.targetPage) || this.targetPage > this.pageCount || this.targetPage < 1 || this.targetPage > this.maxPage) {
        this.$emit('current-change', 1);
      } else {
        this.$emit('current-change', Number(this.targetPage));
      }
    },
    prev() {
      if (this.currentPage !== 1) {
        const prevPage = this.currentPage - 1;
        this.$emit('current-change', prevPage);
      }
    },
    next() {
      if (this.currentPage !== this.pageCount) {
        const nextPage = this.currentPage + 1;
        this.$emit('current-change', nextPage);
      }
    },
  },
  computed: {
    pagers() {
      const pagerCount = 7;
      const currentPage = Number(this.currentPage);
      const pageCount = Number(this.pageCount);
      let showPrevMore = false;
      let showNextMore = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - 3) {
          showPrevMore = true;
        }
        if (currentPage < pageCount - 3) {
          showNextMore = true;
        }
      }
      const array = [];
      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i += 1) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i += 1) {
          array.push(i);
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i += 1) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;
      return array;
    },
  },
};
</script>
