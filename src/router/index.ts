import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter( {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import( '@/pages/HomePage.vue' ),
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import( '@/pages/GuidePage.vue' ),
    },
    // Legal pages (hosted on haritna.net for SSO provider compliance)
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import( '@/pages/PrivacyPage.vue' ),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import( '@/pages/TermsPage.vue' ),
    },
    {
      path: '/data-deletion',
      name: 'data-deletion',
      component: () => import( '@/pages/DataDeletionPage.vue' ),
    },
    // Dukkan routes
    {
      path: '/dukkan',
      name: 'dukkan',
      component: () => import( '@/dukkan/pages/WalkthroughPage.vue' ),
    },
    {
      path: '/dukkan/stories',
      name: 'stories',
      component: () => import( '@/dukkan/pages/StoriesIndex.vue' ),
    },
    {
      path: '/dukkan/stories/:profession',
      name: 'story',
      component: () => import( '@/dukkan/pages/StoryPage.vue' ),
      props: true,
    },
  ],
  scrollBehavior( _to, _from, savedPosition ) {
    if ( savedPosition ) return savedPosition
    return { top: 0 }
  },
} )

export default router
