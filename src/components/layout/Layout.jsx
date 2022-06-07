import React, { useContext } from "react";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Navigation from "../navigatiopn/Navigation";
import Panel from "../panel/Panel";

import { ThemeContext } from "../../context/ThemeContext";

import "./layout.css";

const Layout = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="wrapper">
      <section className="section-wrapper">
        <nav>
          <Navigation navigationType={theme.navigation} />
        </nav>
        <main>
          <Main colorType={theme.text} />
        </main>
        <footer>
          <Footer footerType={theme.footer} />
        </footer>
      </section>

      <aside>
        <Panel />
      </aside>
    </div>
  );
};

export default Layout;
