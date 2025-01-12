const setTransition = (name) => {
  document.documentElement.dataset.page = name
}

const enterLeft_fadeOut = 'enter-left-fade-out';
const fadeIn_exitLeft = 'fade-in-exit-left';
const enterRight_fadeOut = 'enter-right-fade-out';
const fadeIn_exitRight = 'fade-in-exit-right';
const enterRight_exitLeft = 'enter-right-exit-left';
const enterLeft_exitRight = 'enter-left-exit-right';

// NEW PAGE LOGIC
window.addEventListener('pagereveal', async (e) => {
  if (!e.viewTransition) return;

  const { pathname: oldPath } = new URL(document.referrer);
  const { pathname: newPath } = new URL(location.href);

  const wasHome = oldPath.includes('index.html');
  const wasArticle = oldPath.includes('article.html');
  const wasAllArticles = oldPath.includes('articles.html');

  const isHome = newPath.includes('index.html');
  const isArticlePage = newPath.includes('article.html');
  const isAllArticlePage = newPath.includes('articles.html');

  if (wasHome && isArticlePage) setTransition(enterLeft_fadeOut);
  if (wasArticle && isHome) setTransition(fadeIn_exitLeft);

  if (wasHome && isAllArticlePage) setTransition(enterRight_fadeOut);
  if (wasAllArticles && isHome) setTransition(fadeIn_exitRight);

  if (wasAllArticles && isArticlePage) setTransition(enterLeft_exitRight);
  if (wasArticle && isAllArticlePage) setTransition(enterRight_exitLeft);
});
