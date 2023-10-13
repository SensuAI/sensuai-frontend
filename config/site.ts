export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "SensuAI",
  description:
    "¡La plataforma favorita de Oxxo Gas!",
  secNav: [
    {
      title: "Inicia sesión",
      href: "/sign-in",
    },
    {
      title: "Crear Cuenta",
      href: "/sign-up",
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
  ],


  links: {
    twitter: "https://twitter.com/solisolsoli",
    github: "https://github.com/SensuAI",
    docs: "https://ui.shadcn.com",
  },
}
