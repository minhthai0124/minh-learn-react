import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import React from 'react';

const Index =()=>(
    <Layout>
      <h1>My Demo</h1>
      <div className="container">
          <Link href="/about">List users</Link>
          <br/>
          <Link href="/post">Content</Link>
          <br/>
          <Link href="/eachValue">Each user</Link>
          <br/>
          <Link href="/wiki">Search </Link>
      </div>
    </Layout>
)
export default Index