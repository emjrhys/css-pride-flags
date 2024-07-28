const n=`<template>
  <div class="aromantic-flag">
    <div class="green" />
    <div class="light-green" />
    <div class="white" />
    <div class="grey" />
    <div class="black" />
  </div>
</template>

<style scoped>
.green { background-color: #3DA542; }
.light-green { background-color: #A7D379; }
.white { background-color: #FFFFFF; }
.grey { background-color: #A9A9A9; }
.black { background-color: #000000; }

.aromantic-flag {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
}
</style>`;export{n as default};
