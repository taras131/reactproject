import React from "react";
import Logo from "./header/logo";
import Title from "./header/Title";
import Account from "./header/Account";

const Header = () =>{
    return (
        <header className = "header">
            <Logo/>
            <Title/>
            <Account/>
        </header>
    );
}
export default Header;