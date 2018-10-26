import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import Sidebar from '../components/sidebar';

import About from '../components/index/about';
import Contact from '../components/index/contact';
import Events from '../components/index/events';
import Intro from '../components/index/intro';
import Join from '../components/index/join';
import Schedule from '../components/index/schedule';
import Who from '../components/index/who';

const IndexPage = () => (
  <Layout>
    <Sidebar></Sidebar>
    <Intro></Intro>
    <About></About>
    <Who></Who>
    <Schedule></Schedule>
    <Join></Join>
    <Events></Events>
    <Contact></Contact>
  </Layout>
)

export default IndexPage
