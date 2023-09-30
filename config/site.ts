export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "SensuAI",
  description:
    "¡Un lugar donde predecir la casa de tus sueños a un precio de ensueño!.",
  secNav: [
    {
      title: "Inicia sesión",
      href: "/sign-in",
    },
  ],
  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Sobre nosotros",
      href: "/",

    },
    {
      title: "¡Únete!",
      href: "/sign-up",
    },
  ],


  links: {
    twitter: "https://twitter.com/solisolsoli",
    github: "https://github.com/TempleOSi",
    docs: "https://ui.shadcn.com",
  },
}
