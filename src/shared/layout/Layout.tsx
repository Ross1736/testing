import Menu from "../components/Menu";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Menu />
      {children}
      <footer></footer>
    </>
  );
}

export default Layout;
