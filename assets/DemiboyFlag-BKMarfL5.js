const e=`<template>
  <div class="demiboy-flag">
    <div class="dark-grey" />
    <div class="grey" />
    <div class="turquoise" />
    <div class="white" />
    <div class="turquoise" />
    <div class="grey" />
    <div class="dark-grey" />
  </div>
</template>

<style scoped>
.dark-grey { background-color: #7F7F7F; }
.grey { background-color: #C4C4C4; }
.turquoise { background-color: #9DD7EA; }
.white { background-color: #FFFFFF; }

.demiboy-flag {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
}
</style>`;export{e as default};
