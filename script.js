const setTransitionName = (name) => {
  document.documentElement.dataset.page = name
}

const enterLeft_fadeOut = 'enter-left-fade-out';
const fadeIn_exitLeft = 'fade-in-exit-left';
const enterRight_fadeOut = 'enter-right-fade-out';
const fadeIn_exitRight = 'fade-in-exit-right';
const enterRight_exitLeft = 'enter-right-exit-left';
const enterLeft_exitRight = 'enter-left-exit-right';

// OLD PAGE LOGIC
window.addEventListener('pageswap', async (e) => {
  if (e.viewTransition) { }
});

// NEW PAGE LOGIC
window.addEventListener('pagereveal', async (e) => {
  if (e.viewTransition) {
    const fromUrl = new URL(document.referrer);
    const currentUrl = new URL(location.href);

    const isFromHome = fromUrl.pathname.includes('index.html');
    const isFromArticle = fromUrl.pathname.includes('article.html');
    const isFromAllArticles = fromUrl.pathname.includes('articles.html');

    const isCurrentHome = currentUrl.pathname.includes('index.html');
    const isCurrentArticle = currentUrl.pathname.includes('article.html');
    const isCurrentAllArticles = currentUrl.pathname.includes('articles.html');

    if (isFromHome && isCurrentArticle) setTransitionName(enterLeft_fadeOut);
    if (isFromArticle && isCurrentHome) setTransitionName(fadeIn_exitLeft);

    if (isFromHome && isCurrentAllArticles) setTransitionName(enterRight_fadeOut);
    if (isFromAllArticles && isCurrentHome) setTransitionName(fadeIn_exitRight);

    if (isFromAllArticles && isCurrentArticle) setTransitionName(enterLeft_exitRight);
    if (isFromArticle && isCurrentAllArticles) setTransitionName(enterRight_exitLeft);
  }
});