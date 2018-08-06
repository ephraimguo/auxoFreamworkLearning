import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _9d1a9bd0 = () => import('../pages/testMe.vue' /* webpackChunkName: "pages/testMe" */).then(m => m.default || m)
const _9a4ed3a2 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _3cbd051c = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _5f78b981 = () => import('../pages/about/a.vue' /* webpackChunkName: "pages/about/a" */).then(m => m.default || m)
const _2f481660 = () => import('../pages/test.vue' /* webpackChunkName: "pages/test" */).then(m => m.default || m)
const _a5865816 = () => import('../pages/sub/b.vue' /* webpackChunkName: "pages/sub/b" */).then(m => m.default || m)
const _a5a28718 = () => import('../pages/sub/a.vue' /* webpackChunkName: "pages/sub/a" */).then(m => m.default || m)
const _5adf1e18 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _55ae205c = () => import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/testMe",
			component: _9d1a9bd0,
			name: "testMe"
		},
		{
			path: "/about",
			component: _9a4ed3a2,
			children: [
				{
					path: "",
					component: _3cbd051c,
					name: "about"
				},
				{
					path: "a",
					component: _5f78b981,
					name: "about-a"
				}
			]
		},
		{
			path: "/test",
			component: _2f481660,
			name: "test"
		},
		{
			path: "/sub/b",
			component: _a5865816,
			name: "sub-b"
		},
		{
			path: "/sub/a",
			component: _a5a28718,
			name: "sub-a"
		},
		{
			path: "/",
			component: _5adf1e18,
			name: "index"
		},
		{
			path: "/:id",
			component: _55ae205c,
			name: "id"
		}
    ],
    
    
    fallback: false
  })
}
