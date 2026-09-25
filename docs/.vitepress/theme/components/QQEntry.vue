<template>
  <div class="qq-entry">
    <button class="qq-button" type="button" aria-label="QQ Group">
      <img class="qq-icon" src="/images/qq-icon.svg" alt="QQ">
    </button>
    <div class="qq-popover">
      <img class="qq-group-image" src="/images/qq_group.jpg" alt="QQ Group QR Code">
    </div>
  </div>
</template>

<style scoped>
.qq-entry {
  position: relative;
  display: flex;
  align-items: center;
  height: var(--vp-nav-height);
  margin-left: 12px;
}

.qq-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.25s, opacity 0.25s;
}

.qq-button:hover {
  color: var(--vp-c-text-1);
}

.qq-icon {
  width: 18px;
  height: 18px;
  display: block;
}

.qq-popover {
  position: absolute;
  top: calc(100% - 6px);
  right: -12px;
  display: none;
  padding-top: 12px;
}

.qq-entry:hover .qq-popover,
.qq-entry:focus-within .qq-popover {
  display: block;
}

.qq-group-image {
  width: 220px;
  max-width: 60vw;
  display: block;
  border-radius: var(--ft-radius-inner);
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
}

@media (max-width: 768px) {
  .qq-entry {
    display: none;
  }
}
</style>
