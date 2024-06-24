<template>
  <div class="asexual-flag">
    <div class="black" />
    <div class="grey" />
    <div class="white" />
    <div class="purple" />
  </div>
</template>

<style scoped>
.black { background-color: #000000; }
.grey { background-color: #A3A3A3; }
.white { background-color: #FFFFFF; }
.purple { background-color: #800080; }

.asexual-flag {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
}
</style>