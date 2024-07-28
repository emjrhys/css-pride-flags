const n=`<template>
  <div class="gay-men-flag">
    <div class="dark-green" />
    <div class="green" />
    <div class="light-green" />
    <div class="white" />
    <div class="light-blue" />
    <div class="indigo" />
    <div class="blue" />
  </div>
</template>

<style scoped>
.dark-green { background-color: #078D70; }
.green { background-color: #26CEAA; }
.light-green { background-color: #98E8C1; }
.white { background-color: #FFFFFF; }
.light-blue { background-color: #7BADE2; }
.indigo { background-color: #5049CC; }
.blue { background-color: #3D1A78; }

.gay-men-flag {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
}
</style>`;export{n as default};
