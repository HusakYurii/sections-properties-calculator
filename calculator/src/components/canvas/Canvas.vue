<template>
  <div id="canvas-container">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script lang="ts" src="./Canvas.ts"></script>

<style>
#canvas-container {
  position: absolute;
  width: 70%;
  height: 60%;
  top: 0;
  left: 0;
}
#canvas {
  background-color: white;
  width: 100%;
  height: 100%;
}
</style>
