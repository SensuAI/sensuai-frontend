export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "EYYE",
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
      href: "/about_us",
    },
    {
      title: "Conoce al equipo",
      href: "/about_team",
    }
  ],


  links: {
    github: "https://github.com/SensuAI",
    docs: "https://ui.shadcn.com",
  },
}
