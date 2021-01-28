<template>
  <div>
    <div class="loop -type1">
      <img src="~/assets/images/text_video_01.svg" alt="LIVE VIDEO" />
      <img src="~/assets/images/text_video_01.svg" alt="LIVE VIDEO" />
    </div>
    <div class="loop -type2">
      <img src="~/assets/images/text_video_02.svg" alt="LIVE VIDEO" />
      <img src="~/assets/images/text_video_02.svg" alt="LIVE VIDEO" />
    </div>
    <div class="loop -type1">
      <img src="~/assets/images/text_video_01.svg" alt="LIVE VIDEO" />
      <img src="~/assets/images/text_video_01.svg" alt="LIVE VIDEO" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loop {
  display: flex;
  width: 100vw;
  height: 6rem;
  @media screen and (min-width: 900px) {
    height: 8rem;
  }
  // overflow: hidden;
  img {
    width: auto;
    height: 100%;
  }
  &.-type1 {
    img {
      padding: 0 3rem 0 0;
      &:first-child {
        animation: loop1-1 180s -90s linear infinite;
      }
      &:last-child {
        animation: loop1-2 180s linear infinite;
      }
    }
  }
  &.-type2 {
    img {
      padding: 0 3rem 0 0;
      &:first-child {
        animation: loop2-1 180s -90s linear infinite;
      }
      &:last-child {
        animation: loop2-2 180s linear infinite;
      }
    }
  }
}

@keyframes loop1-1 {
  0% {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}
@keyframes loop1-2 {
  0% {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes loop2-1 {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes loop2-2 {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200%);
  }
}
</style>
