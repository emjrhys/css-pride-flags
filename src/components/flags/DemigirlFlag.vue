<template>
  <div class="demigirl-flag">
    <div class="dark-grey" />
    <div class="grey" />
    <div class="pink" />
    <div class="white" />
    <div class="pink" />
    <div class="grey" />
    <div class="dark-grey" />
  </div>
</template>

<style scoped>
.dark-grey { background-color: #7F7F7F; }
.grey { background-color: #C4C4C4; }
.pink { background-color: #FDADC8; }
.white { background-color: #FFFFFF; }

.demigirl-flag {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
}
</style>