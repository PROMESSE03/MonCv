
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  ActiveSection: typeof import("../../components/ActiveSection.vue")['default']
  Blog: typeof import("../../components/Blog.vue")['default']
  BlogClassic: typeof import("../../components/BlogClassic.vue")['default']
  BlogDetails: typeof import("../../components/BlogDetails.vue")['default']
  BlogDetailsClassic: typeof import("../../components/BlogDetailsClassic.vue")['default']
  Clients: typeof import("../../components/Clients.vue")['default']
  Contacts: typeof import("../../components/Contacts.vue")['default']
  Header: typeof import("../../components/Header.vue")['default']
  Knowledge: typeof import("../../components/Knowledge.vue")['default']
  PreLoader: typeof import("../../components/PreLoader.vue")['default']
  Quote: typeof import("../../components/Quote.vue")['default']
  SideBarContent: typeof import("../../components/SideBarContent.vue")['default']
  SocialLinks: typeof import("../../components/SocialLinks.vue")['default']
  TestimonialsSlider: typeof import("../../components/TestimonialsSlider.vue")['default']
  TypingAnimation: typeof import("../../components/TypingAnimation.vue")['default']
  Works: typeof import("../../components/Works.vue")['default']
  AboutMe: typeof import("../../components/about/AboutMe.vue")['default']
  AboutMe2: typeof import("../../components/about/AboutMe2.vue")['default']
  AboutFunFact: typeof import("../../components/about/FunFact.vue")['default']
  AboutPrice: typeof import("../../components/about/Price.vue")['default']
  AboutServices: typeof import("../../components/about/Services.vue")['default']
  BackgroundImage: typeof import("../../components/background/BackgroundImage.vue")['default']
  BackgroundGradientBG: typeof import("../../components/background/GradientBG.vue")['default']
  HomeIndex1: typeof import("../../components/home/Index-1.vue")['default']
  HomeIndexClassic: typeof import("../../components/home/Index-classic.vue")['default']
  HomeIndex2: typeof import("../../components/home/index-2.vue")['default']
  HomeIndex3: typeof import("../../components/home/index-3.vue")['default']
  HomeIndex4: typeof import("../../components/home/index-4.vue")['default']
  HomeIndex5: typeof import("../../components/home/index-5.vue")['default']
  HomeIndex6: typeof import("../../components/home/index-6.vue")['default']
  HomeIndex7: typeof import("../../components/home/index-7.vue")['default']
  HomeIndex8: typeof import("../../components/home/index-8.vue")['default']
  IsotopeFitnessIsotope: typeof import("../../components/isotope/FitnessIsotope.vue")['default']
  IsotopeLawyer: typeof import("../../components/isotope/Lawyer.vue")['default']
  IsotopeMusician: typeof import("../../components/isotope/Musician.vue")['default']
  IsotopeWriter: typeof import("../../components/isotope/Writer.vue")['default']
  PopupContentPopup: typeof import("../../components/popup/ContentPopup.vue")['default']
  PopupImgGallery: typeof import("../../components/popup/ImgGallery.vue")['default']
  PopupMfpPopup: typeof import("../../components/popup/MfpPopup.vue")['default']
  ResumeEducation: typeof import("../../components/resume/Education.vue")['default']
  ResumeExperience: typeof import("../../components/resume/Experience.vue")['default']
  Resume: typeof import("../../components/resume/Resume.vue")['default']
  SkillLanguages: typeof import("../../components/skill/Languages.vue")['default']
  SkillPorgressBar: typeof import("../../components/skill/PorgressBar.vue")['default']
  SkillPorgressCircle: typeof import("../../components/skill/PorgressCircle.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  Swiper: typeof import("swiper/vue")['Swiper']
  SwiperSlide: typeof import("swiper/vue")['SwiperSlide']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyActiveSection: LazyComponent<typeof import("../../components/ActiveSection.vue")['default']>
  LazyBlog: LazyComponent<typeof import("../../components/Blog.vue")['default']>
  LazyBlogClassic: LazyComponent<typeof import("../../components/BlogClassic.vue")['default']>
  LazyBlogDetails: LazyComponent<typeof import("../../components/BlogDetails.vue")['default']>
  LazyBlogDetailsClassic: LazyComponent<typeof import("../../components/BlogDetailsClassic.vue")['default']>
  LazyClients: LazyComponent<typeof import("../../components/Clients.vue")['default']>
  LazyContacts: LazyComponent<typeof import("../../components/Contacts.vue")['default']>
  LazyHeader: LazyComponent<typeof import("../../components/Header.vue")['default']>
  LazyKnowledge: LazyComponent<typeof import("../../components/Knowledge.vue")['default']>
  LazyPreLoader: LazyComponent<typeof import("../../components/PreLoader.vue")['default']>
  LazyQuote: LazyComponent<typeof import("../../components/Quote.vue")['default']>
  LazySideBarContent: LazyComponent<typeof import("../../components/SideBarContent.vue")['default']>
  LazySocialLinks: LazyComponent<typeof import("../../components/SocialLinks.vue")['default']>
  LazyTestimonialsSlider: LazyComponent<typeof import("../../components/TestimonialsSlider.vue")['default']>
  LazyTypingAnimation: LazyComponent<typeof import("../../components/TypingAnimation.vue")['default']>
  LazyWorks: LazyComponent<typeof import("../../components/Works.vue")['default']>
  LazyAboutMe: LazyComponent<typeof import("../../components/about/AboutMe.vue")['default']>
  LazyAboutMe2: LazyComponent<typeof import("../../components/about/AboutMe2.vue")['default']>
  LazyAboutFunFact: LazyComponent<typeof import("../../components/about/FunFact.vue")['default']>
  LazyAboutPrice: LazyComponent<typeof import("../../components/about/Price.vue")['default']>
  LazyAboutServices: LazyComponent<typeof import("../../components/about/Services.vue")['default']>
  LazyBackgroundImage: LazyComponent<typeof import("../../components/background/BackgroundImage.vue")['default']>
  LazyBackgroundGradientBG: LazyComponent<typeof import("../../components/background/GradientBG.vue")['default']>
  LazyHomeIndex1: LazyComponent<typeof import("../../components/home/Index-1.vue")['default']>
  LazyHomeIndexClassic: LazyComponent<typeof import("../../components/home/Index-classic.vue")['default']>
  LazyHomeIndex2: LazyComponent<typeof import("../../components/home/index-2.vue")['default']>
  LazyHomeIndex3: LazyComponent<typeof import("../../components/home/index-3.vue")['default']>
  LazyHomeIndex4: LazyComponent<typeof import("../../components/home/index-4.vue")['default']>
  LazyHomeIndex5: LazyComponent<typeof import("../../components/home/index-5.vue")['default']>
  LazyHomeIndex6: LazyComponent<typeof import("../../components/home/index-6.vue")['default']>
  LazyHomeIndex7: LazyComponent<typeof import("../../components/home/index-7.vue")['default']>
  LazyHomeIndex8: LazyComponent<typeof import("../../components/home/index-8.vue")['default']>
  LazyIsotopeFitnessIsotope: LazyComponent<typeof import("../../components/isotope/FitnessIsotope.vue")['default']>
  LazyIsotopeLawyer: LazyComponent<typeof import("../../components/isotope/Lawyer.vue")['default']>
  LazyIsotopeMusician: LazyComponent<typeof import("../../components/isotope/Musician.vue")['default']>
  LazyIsotopeWriter: LazyComponent<typeof import("../../components/isotope/Writer.vue")['default']>
  LazyPopupContentPopup: LazyComponent<typeof import("../../components/popup/ContentPopup.vue")['default']>
  LazyPopupImgGallery: LazyComponent<typeof import("../../components/popup/ImgGallery.vue")['default']>
  LazyPopupMfpPopup: LazyComponent<typeof import("../../components/popup/MfpPopup.vue")['default']>
  LazyResumeEducation: LazyComponent<typeof import("../../components/resume/Education.vue")['default']>
  LazyResumeExperience: LazyComponent<typeof import("../../components/resume/Experience.vue")['default']>
  LazyResume: LazyComponent<typeof import("../../components/resume/Resume.vue")['default']>
  LazySkillLanguages: LazyComponent<typeof import("../../components/skill/Languages.vue")['default']>
  LazySkillPorgressBar: LazyComponent<typeof import("../../components/skill/PorgressBar.vue")['default']>
  LazySkillPorgressCircle: LazyComponent<typeof import("../../components/skill/PorgressCircle.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazySwiper: LazyComponent<typeof import("swiper/vue")['Swiper']>
  LazySwiperSlide: LazyComponent<typeof import("swiper/vue")['SwiperSlide']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
