const n=`<template>
  <div class="genderfluid-flag">
    <div class="pink" />
    <div class="white" />
    <div class="purple" />
    <div class="black" />
    <div class="blue" />
  </div>
</template>

<style scoped>
.pink { background-color: #FF76A4; }
.white { background-color: #FFFFFF; }
.purple { background-color: #C011D7; }
.black { background-color: #000000; }
.blue { background-color: #2F3CBE; }

.genderfluid-flag {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
}
</style>`;export{n as default};
