<template>
  <div class="progress-pride-flag">
    <div class="the-pride-part">
      <div class="red" />
      <div class="orange" />
      <div class="yellow" />
      <div class="green" />
      <div class="indigo" />
      <div class="violet" />
    </div>
    <div class="the-progress-part">
      <div class="black">
        <div class="brown">
          <div class="blue">
            <div class="pink">
              <div class="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.red { background-color: #FF0000; }
.orange { background-color: #FF8E00; }
.yellow { background-color: #FFFF00; }
.green { background-color: #008E00; }
.indigo { background-color: #400098; }
.violet { background-color: #8E008E; }
.white { background-color: #FFF; }
.pink { background-color: #FFAFC8; }
.blue { background-color: #74D7EE; }
.brown { background-color: #613915; }
.black { background-color: #000000; }

.progress-pride-flag {
  position: relative;
}

.the-pride-part {
  height: 100%;
  
  display: grid;
  grid-template-rows: repeat(6, 1fr);
}

.the-progress-part {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

.the-progress-part div {
  padding: 16px;
}

.the-progress-part .white {
  padding: 24px;
}
</style>