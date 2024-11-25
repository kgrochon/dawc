import { HeaderProps } from "./util/types";
import logo from "./images/logo.png";
export const Header = ({ setTab, tabs } : HeaderProps) => {
    return (
      <header className="header">
        <button className="header-main" onClick={() => setTab("About")}>
            <img src={logo} alt="Detroit Anti War Comittee Logo" className="logo img"/>
            <h1>Detroit Anti War Committee</h1>
        </button>
        <nav>
            {tabs.map((t) => {
                return (
                    <button 
                    key={t.name}
                    className="nav-button"
                    onClick={() => {setTab(t.name)}}>
                        {t.name}
                    </button>
                )
            })}
        </nav>
      </header>
    );
  }
  
  export default Header;
  