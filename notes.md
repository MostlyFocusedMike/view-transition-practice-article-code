https://developer.chrome.com/docs/web-platform/view-transitions

## How view transitions work

The transition API, once activated either by the API or a same origin page navigation, will

```
::view-transition
└─ ::view-transition-group(group-name)
   └─ ::view-transition-image-pair(group-name)
      ├─ ::view-transition-old(group-name)
      └─ ::view-transition-new(group-name)
```

you can explicitly name groups, `root` is the default group name

## Multi Page transitions
https://developer.chrome.com/docs/web-platform/view-transitions/cross-document

So all you need to get the "cross fade" default behavior is each page needs this css:

```
    @view-transition {
      navigation: auto;
    }
```

Unlike the SPA version, there is not `startTransition` API, probably because there's no such thing as an API to go to a new page.

The condition is that you must be on the same origin and both pages need the CSS


* learn how to differentiate animations based on page url
  * articles => article === slide in from right
  * article => articles === slide in to the right

* learn how to use groups to keep things like the header from moving
- you just assign them a different transition group name, any string seems to work.
- You can then


so view transition groups go 1:1, like if you have an article page and a home page, don't use 2 groups. You can't transition an "article" group into a "home" group. Instead you have do distinguish the animation behavior at a lower level. What Google recommends is using a data attribute on the root. Here we have a slide in and slide out.

```css
:root[data-page="article"] {
  &::view-transition-old(page) { /* the home page fades */
    animation: 600ms cubic-bezier(0.4, 0, 0.2, 1) both fade-out;
  }

  &::view-transition-new(page) { /* the article slides in */
    animation: 600ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-left;
  }
}

:root[data-page="home"] {
  &::view-transition-old(page) { /* the article slides out */
    animation: 600ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
    z-index: 100;
  }

  &::view-transition-new(page) { /* the home page fades in */
    animation: 600ms cubic-bezier(0.4, 0, 0.2, 1) both fade-in;
    z-index: 1;
  }
}
```

Something very important to note is that the data attribute is the page you're *going to*. So on `data-page="article"`, the "old" page is the home page, and the new page is the article.

Also important to note, that the transition-new image will always be on top, so if you want to alter that, you must use the z index.

You can control this data attribute manually (by doing `<html lang="en" data-page="article">`) or setting it with events.


## It's about animations not pages
You shouldn't define it like that though, because you have more than 2 pages, so you can't just go from x -> y, you need

like "coming FROM article, means slide to left"


home => all articles
home -> article

all articles => home ==
all articles => article == slide from left

slide-left-fade-in (old => slide to left, new => slide from right)
article => home == slide to left


article => articles == slide to left