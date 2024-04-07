<template>
  <div class="footer">
    <div class="copyright">© ArcoPlus 2024 All Rights Reserved</div>
    <div class="footer-items">
      <div class="footer-item">Privacy Policy</div>
      <div class="footer-item">Terms of Use</div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #1e1e1e;
  color: #fff;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Poppins, sans-serif;
}

.footer-items {
  display: flex;
  gap: 50px;
}

.footer-item {
  font-size: 14px;
  font-weight: 400;
  transition: color 0.3s; /* Adding transition for smooth effect */
  cursor: pointer;
}

.footer-item:hover {
  color: rgba(205, 171, 100, 1);
}

.copyright {
  font-size: 14px;
}
</style>
