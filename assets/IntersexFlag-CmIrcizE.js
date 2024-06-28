const n=`<template>
  <div class="intersex-flag yellow">
    <div class="violet circle">
      <div class="yellow circle" />
    </div>
  </div>
</template>

<style scoped>
.yellow { background-color: #FFD800; }
.violet { background-color: #7902AA; }

.circle { border-radius: 50% }

.intersex-flag {
  display: flex;
  justify-content: center;
  align-items: center;
}

.intersex-flag .circle {
  padding: 15px;
}

.intersex-flag .circle .circle {
  padding: 30px;
}
</style>`;export{n as default};
