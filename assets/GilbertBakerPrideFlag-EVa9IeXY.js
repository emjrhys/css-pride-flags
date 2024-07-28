const n=`<template>
  <div class="gilbert-baker-pride-flag">
    <div class="pink" />
    <div class="red" />
    <div class="orange" />
    <div class="yellow" />
    <div class="green" />
    <div class="turquoise" />
    <div class="indigo" />
    <div class="violet" />
  </div>
</template>

<style scoped>
.pink { background-color: #FF6599; }
.red { background-color: #FF0000; }
.orange { background-color: #FF8E00; }
.yellow { background-color: #FFFF00; }
.green { background-color: #008E00; }
.turquoise { background-color: #00C0C0; }
.indigo { background-color: #400098; }
.violet { background-color: #8E008E; }

.gilbert-baker-pride-flag {
  display: grid;
  grid-template-rows: repeat(8, 1fr);
}
</style>`;export{n as default};
