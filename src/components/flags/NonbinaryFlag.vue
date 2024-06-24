<template>
  <div class="nonbinary-flag">
    <div class="yellow" />
    <div class="white" />
    <div class="purple" />
    <div class="black" />
  </div>
</template>

<style scoped>
.yellow { background-color: #FCF434; }
.white { background-color: #FFFFFF; }
.purple { background-color: #9C59D1; }
.black { background-color: #2C2C2C; }

.nonbinary-flag {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
}
</style>