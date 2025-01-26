import Menu from "../components/Menu";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Menu />

      <main>{children}</main>

      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
