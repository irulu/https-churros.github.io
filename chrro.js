// ページがスクロールされたときに発火
window.addEventListener('scroll', () => {
    // .menu-item をすべて取得
    const items = document.querySelectorAll('.menu-item');
  
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      // 要素が画面内に入ったら「.show」をつける
      if (rect.top < windowHeight - 100) {
        item.classList.add('show');
      }
    });
  });

  // 画像をクリックしたら説明を表示/非表示
document.querySelectorAll('.menu-item img').forEach(img => {
  img.addEventListener('click', () => {
    const item = img.closest('.menu-item');
    item.classList.toggle('active');
  });
});

  
