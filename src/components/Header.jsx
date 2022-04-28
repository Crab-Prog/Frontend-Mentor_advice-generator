import React from "react";
import "./header.css";

function Header({id}) {
    console.log(`'Here : ${id} `)
    return (
            <h1>ADVICE #{id}</h1>
    )
}

export default Header;