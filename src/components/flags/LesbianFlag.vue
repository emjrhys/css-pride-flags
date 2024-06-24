<template>
  <div class="lesbian-flag">
    <div class="dark-orange" />
    <div class="orange" />
    <div class="light-orange" />
    <div class="white" />
    <div class="pink" />
    <div class="dusty-pink" />
    <div class="dark-rose" />
  </div>
</template>

<style scoped>
.dark-orange { background-color: #D52D00; }
.orange { background-color: #EF7627; }
.light-orange { background-color: #FF9A56; }
.white { background-color: #FFFFFF; }
.pink { background-color: #D162A4; }
.dusty-pink { background-color: #B55690; }
.dark-rose { background-color: #A30262; }

.lesbian-flag {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
}
</style>