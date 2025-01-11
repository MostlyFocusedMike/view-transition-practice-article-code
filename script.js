// OLD PAGE LOGIC
window.addEventListener('pageswap', async (e) => {
  if (e.viewTransition) { }
});

// NEW PAGE LOGIC
window.addEventListener('pagereveal', async (e) => {
  console.log('e reveal:', e);
  if (e.viewTransition) {
    const fromUrl = new URL(document.referrer);
    const currentUrl = new URL(location.href);

    const isFromHome = fromUrl.pathname.includes('index.html');
    const isFromArticle = fromUrl.pathname.includes('article.html');
    const isFromAllArticles = fromUrl.pathname.includes('articles.html');

    const isCurrentHome = currentUrl.pathname.includes('index.html');
    const isCurrentArticle = currentUrl.pathname.includes('article.html');
    const isCurrentAllArticles = currentUrl.pathname.includes('articles.html');

    if (isFromHome && isCurrentArticle) {
      document.documentElement.dataset.page = 'enter-left-fade-out';
    }

    if (isFromArticle && isCurrentHome) {
      document.documentElement.dataset.page = 'fade-in-exit-left';
    }

    if (isFromHome && isCurrentAllArticles) {
      document.documentElement.dataset.page = 'enter-right-fade-out';
    }

    if (isFromAllArticles && isCurrentHome) {
      document.documentElement.dataset.page = 'fade-in-exit-right';
    }

    if (isFromArticle && isCurrentAllArticles) {
      document.documentElement.dataset.page = 'enter-right-exit-left';
    }

    if (isFromAllArticles && isCurrentArticle) {
      document.documentElement.dataset.page = 'enter-left-exit-right';
    }
  }
});