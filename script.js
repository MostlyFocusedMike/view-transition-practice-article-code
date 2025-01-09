// OLD PAGE LOGIC
console.log('document.documentElement.dataset:', document.documentElement.dataset);
window.addEventListener('pageswap', async (e) => {
  console.log('e swap:', e.activation);
  debugger

  if (e.viewTransition) {
    localStorage.setItem('old url', JSON.stringify(e.activation.entry.url, null, 2))
    //   const targetUrl = new URL(e.activation.entry.url);

    //   // Navigating to a profile page
    //   if (isProfilePage(targetUrl)) {
    //     const profile = extractProfileNameFromUrl(targetUrl);

    //     // Set view-transition-name values on the clicked row
    //     document.querySelector(`#${profile} span`).style.viewTransitionName = 'name';
    //     document.querySelector(`#${profile} img`).style.viewTransitionName = 'avatar';

    //     // Remove view-transition-names after snapshots have been taken
    //     // (this to deal with BFCache)
    //     await e.viewTransition.finished;
    //     document.querySelector(`#${profile} span`).style.viewTransitionName = 'none';
    //     document.querySelector(`#${profile} img`).style.viewTransitionName = 'none';
    //   }
  }
});

// NEW PAGE LOGIC
window.addEventListener('pagereveal', async (e) => {
  console.log('e reveal:', e);
  if (e.viewTransition) {
    // const fromURL = new URL(navigation.activation.from.url);
    // const currentURL = new URL(navigation.activation.entry.url);

    // // Navigating from a profile page back to the homepage
    // if (isProfilePage(fromURL) && isHomePage(currentURL)) {
    //   const profile = extractProfileNameFromUrl(currentURL);

    //   // Set view-transition-name values on the elements in the list
    //   document.querySelector(`#${profile} span`).style.viewTransitionName = 'name';
    //   document.querySelector(`#${profile} img`).style.viewTransitionName = 'avatar';

    //   // Remove names after snapshots have been taken
    //   // so that we're ready for the next navigation
    //   await e.viewTransition.ready;
    //   document.querySelector(`#${profile} span`).style.viewTransitionName = 'none';
    //   document.querySelector(`#${profile} img`).style.viewTransitionName = 'none';
    // }
  }
});