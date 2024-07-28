const n=`<template>
  <div class="transgender-flag">
    <div class="blue" />
    <div class="pink" />
    <div class="white" />
    <div class="pink" />
    <div class="blue" />
  </div>
</template>

<style scoped>
.blue { background-color: #5BCEFA; }
.pink { background-color: #F5A9B8; }
.white { background-color: #FFFFFF; }

.transgender-flag {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
}
</style>`;export{n as default};
