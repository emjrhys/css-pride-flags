<template>
  <div class="agender-flag">
    <div class="black" />
    <div class="grey" />
    <div class="white" />
    <div class="green" />
    <div class="white" />
    <div class="grey" />
    <div class="black" />
  </div>
</template>

<style scoped>
.black { background-color: #000000; }
.grey { background-color: #BCC4C7; }
.white { background-color: #FFFFFF; }
.green { background-color: #B7F684; }

.agender-flag {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
}
</style>