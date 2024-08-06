type NavItem = {
  text: string;
  link: string;
};

export const navItems: NavItem[] = [
  { text: "Docs", link: "/" },
  { text: "Search packages", link: "/search" },
  { text: "Blog", link: "/blog" },
  { text: "Stats", link: "/stats" },
];

export const NotificationText = () => (
  <>
    ...psst! While Bower is maintained, we recommend using{" "}
    <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">
      Yarn
    </a>{" "}
    and{" "}
    <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
      Vite
    </a>{" "}
    for front-end projects.{" "}
    <a
      href="https://bower.io/blog/2017/how-to-migrate-away-from-bower/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read how to migrate
    </a>
    !
  </>
);
