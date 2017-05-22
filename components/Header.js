import React, { Component } from 'react';
import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  font:50
}
const Header=()=>(
    <div className="header">
        <Link href="/" className="menu"><a style={linkStyle}> Home</a></Link>

        <Link href="/about" className="menu"><a style={linkStyle}> About</a></Link>
        
        <Link href="/post" className="menu"><a style={linkStyle}> Introduction</a></Link>
    </div>
)
export default Header
