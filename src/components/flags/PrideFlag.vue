<template>
  <div class="pride-flag">
    <div class="red" />
    <div class="orange" />
    <div class="yellow" />
    <div class="green" />
    <div class="indigo" />
    <div class="violet" />
  </div>
</template>

<style scoped>
.red { background-color: #FF0000; }
.orange { background-color: #FF8E00; }
.yellow { background-color: #FFFF00; }
.green { background-color: #008E00; }
.indigo { background-color: #400098; }
.violet { background-color: #8E008E; }

.pride-flag {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
}
</style>