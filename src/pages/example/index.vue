<template>
  <div class="pageContainer">
    <div class="example-item" v-for="item of exampleList" @click="handleLinkExample(item)">
      <div class="example-item-img">
        <img :src="item.img_url" />
      </div>
      <div class="example-item-text">
        <h3 @click="handleLinkExample(item)">{{item.name}}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import d3BaseImg from '@/assets/imgs/d3BaseImg.png';
import threeBaseImg from '@/assets/imgs/threeBaseImg.svg';

interface ExampleItem {
  id: string,
  name: string,
  img_url: string,
  desc: string,
}

const routrer = useRouter();

const exampleList = ref([{
    id: 'd3Base',
    name: 'D3基础使用',
    img_url: d3BaseImg,
    desc: '一个基础的项目案例，主要涉及到 D3.js 的基础概念使用。'
  },
  {
    id: 'threeBase',
    name: 'Three基础',
    img_url: threeBaseImg,
    desc: '一个基础的项目案例，主要涉及到 Three.js 的基础概念使用。'
  }
]);

const handleLinkExample = (item: ExampleItem): void => {
  console.log('item:', item);
  routrer.push('/example/' + item.id);
}

</script>

<style lang="less" scoped>
.example-item {
  background: rgba(180, 180, 180, .25);
  display: flex;
  height: 200px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    box-shadow:0 10px 10px rgba(0,0,0,0.1);
    box-sizing: border-box;
    &-img {
      width: 340px;
      transition: 200ms;
    }
  }
  &-img {
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      height: 120px;
    }
  }
  &-text {
    height: 160px;
    h3 {
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        text-decoration: underline rgb(101, 100, 100) solid 2px;
      }
    }
  }
}
</style>