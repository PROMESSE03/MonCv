
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


export const ActiveSection: typeof import("../components/ActiveSection.vue")['default']
export const Blog: typeof import("../components/Blog.vue")['default']
export const BlogClassic: typeof import("../components/BlogClassic.vue")['default']
export const BlogDetails: typeof import("../components/BlogDetails.vue")['default']
export const BlogDetailsClassic: typeof import("../components/BlogDetailsClassic.vue")['default']
export const Clients: typeof import("../components/Clients.vue")['default']
export const Contacts: typeof import("../components/Contacts.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const Knowledge: typeof import("../components/Knowledge.vue")['default']
export const PreLoader: typeof import("../components/PreLoader.vue")['default']
export const Quote: typeof import("../components/Quote.vue")['default']
export const SideBarContent: typeof import("../components/SideBarContent.vue")['default']
export const SocialLinks: typeof import("../components/SocialLinks.vue")['default']
export const TestimonialsSlider: typeof import("../components/TestimonialsSlider.vue")['default']
export const TypingAnimation: typeof import("../components/TypingAnimation.vue")['default']
export const Works: typeof import("../components/Works.vue")['default']
export const AboutMe: typeof import("../components/about/AboutMe.vue")['default']
export const AboutMe2: typeof import("../components/about/AboutMe2.vue")['default']
export const AboutFunFact: typeof import("../components/about/FunFact.vue")['default']
export const AboutPrice: typeof import("../components/about/Price.vue")['default']
export const AboutServices: typeof import("../components/about/Services.vue")['default']
export const BackgroundImage: typeof import("../components/background/BackgroundImage.vue")['default']
export const BackgroundGradientBG: typeof import("../components/background/GradientBG.vue")['default']
export const HomeIndex1: typeof import("../components/home/Index-1.vue")['default']
export const HomeIndexClassic: typeof import("../components/home/Index-classic.vue")['default']
export const HomeIndex2: typeof import("../components/home/index-2.vue")['default']
export const HomeIndex3: typeof import("../components/home/index-3.vue")['default']
export const HomeIndex4: typeof import("../components/home/index-4.vue")['default']
export const HomeIndex5: typeof import("../components/home/index-5.vue")['default']
export const HomeIndex6: typeof import("../components/home/index-6.vue")['default']
export const HomeIndex7: typeof import("../components/home/index-7.vue")['default']
export const HomeIndex8: typeof import("../components/home/index-8.vue")['default']
export const IsotopeFitnessIsotope: typeof import("../components/isotope/FitnessIsotope.vue")['default']
export const IsotopeLawyer: typeof import("../components/isotope/Lawyer.vue")['default']
export const IsotopeMusician: typeof import("../components/isotope/Musician.vue")['default']
export const IsotopeWriter: typeof import("../components/isotope/Writer.vue")['default']
export const PopupContentPopup: typeof import("../components/popup/ContentPopup.vue")['default']
export const PopupImgGallery: typeof import("../components/popup/ImgGallery.vue")['default']
export const PopupMfpPopup: typeof import("../components/popup/MfpPopup.vue")['default']
export const ResumeEducation: typeof import("../components/resume/Education.vue")['default']
export const ResumeExperience: typeof import("../components/resume/Experience.vue")['default']
export const Resume: typeof import("../components/resume/Resume.vue")['default']
export const SkillLanguages: typeof import("../components/skill/Languages.vue")['default']
export const SkillPorgressBar: typeof import("../components/skill/PorgressBar.vue")['default']
export const SkillPorgressCircle: typeof import("../components/skill/PorgressCircle.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Swiper: typeof import("swiper/vue")['Swiper']
export const SwiperSlide: typeof import("swiper/vue")['SwiperSlide']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyActiveSection: LazyComponent<typeof import("../components/ActiveSection.vue")['default']>
export const LazyBlog: LazyComponent<typeof import("../components/Blog.vue")['default']>
export const LazyBlogClassic: LazyComponent<typeof import("../components/BlogClassic.vue")['default']>
export const LazyBlogDetails: LazyComponent<typeof import("../components/BlogDetails.vue")['default']>
export const LazyBlogDetailsClassic: LazyComponent<typeof import("../components/BlogDetailsClassic.vue")['default']>
export const LazyClients: LazyComponent<typeof import("../components/Clients.vue")['default']>
export const LazyContacts: LazyComponent<typeof import("../components/Contacts.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue")['default']>
export const LazyKnowledge: LazyComponent<typeof import("../components/Knowledge.vue")['default']>
export const LazyPreLoader: LazyComponent<typeof import("../components/PreLoader.vue")['default']>
export const LazyQuote: LazyComponent<typeof import("../components/Quote.vue")['default']>
export const LazySideBarContent: LazyComponent<typeof import("../components/SideBarContent.vue")['default']>
export const LazySocialLinks: LazyComponent<typeof import("../components/SocialLinks.vue")['default']>
export const LazyTestimonialsSlider: LazyComponent<typeof import("../components/TestimonialsSlider.vue")['default']>
export const LazyTypingAnimation: LazyComponent<typeof import("../components/TypingAnimation.vue")['default']>
export const LazyWorks: LazyComponent<typeof import("../components/Works.vue")['default']>
export const LazyAboutMe: LazyComponent<typeof import("../components/about/AboutMe.vue")['default']>
export const LazyAboutMe2: LazyComponent<typeof import("../components/about/AboutMe2.vue")['default']>
export const LazyAboutFunFact: LazyComponent<typeof import("../components/about/FunFact.vue")['default']>
export const LazyAboutPrice: LazyComponent<typeof import("../components/about/Price.vue")['default']>
export const LazyAboutServices: LazyComponent<typeof import("../components/about/Services.vue")['default']>
export const LazyBackgroundImage: LazyComponent<typeof import("../components/background/BackgroundImage.vue")['default']>
export const LazyBackgroundGradientBG: LazyComponent<typeof import("../components/background/GradientBG.vue")['default']>
export const LazyHomeIndex1: LazyComponent<typeof import("../components/home/Index-1.vue")['default']>
export const LazyHomeIndexClassic: LazyComponent<typeof import("../components/home/Index-classic.vue")['default']>
export const LazyHomeIndex2: LazyComponent<typeof import("../components/home/index-2.vue")['default']>
export const LazyHomeIndex3: LazyComponent<typeof import("../components/home/index-3.vue")['default']>
export const LazyHomeIndex4: LazyComponent<typeof import("../components/home/index-4.vue")['default']>
export const LazyHomeIndex5: LazyComponent<typeof import("../components/home/index-5.vue")['default']>
export const LazyHomeIndex6: LazyComponent<typeof import("../components/home/index-6.vue")['default']>
export const LazyHomeIndex7: LazyComponent<typeof import("../components/home/index-7.vue")['default']>
export const LazyHomeIndex8: LazyComponent<typeof import("../components/home/index-8.vue")['default']>
export const LazyIsotopeFitnessIsotope: LazyComponent<typeof import("../components/isotope/FitnessIsotope.vue")['default']>
export const LazyIsotopeLawyer: LazyComponent<typeof import("../components/isotope/Lawyer.vue")['default']>
export const LazyIsotopeMusician: LazyComponent<typeof import("../components/isotope/Musician.vue")['default']>
export const LazyIsotopeWriter: LazyComponent<typeof import("../components/isotope/Writer.vue")['default']>
export const LazyPopupContentPopup: LazyComponent<typeof import("../components/popup/ContentPopup.vue")['default']>
export const LazyPopupImgGallery: LazyComponent<typeof import("../components/popup/ImgGallery.vue")['default']>
export const LazyPopupMfpPopup: LazyComponent<typeof import("../components/popup/MfpPopup.vue")['default']>
export const LazyResumeEducation: LazyComponent<typeof import("../components/resume/Education.vue")['default']>
export const LazyResumeExperience: LazyComponent<typeof import("../components/resume/Experience.vue")['default']>
export const LazyResume: LazyComponent<typeof import("../components/resume/Resume.vue")['default']>
export const LazySkillLanguages: LazyComponent<typeof import("../components/skill/Languages.vue")['default']>
export const LazySkillPorgressBar: LazyComponent<typeof import("../components/skill/PorgressBar.vue")['default']>
export const LazySkillPorgressCircle: LazyComponent<typeof import("../components/skill/PorgressCircle.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazySwiper: LazyComponent<typeof import("swiper/vue")['Swiper']>
export const LazySwiperSlide: LazyComponent<typeof import("swiper/vue")['SwiperSlide']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
