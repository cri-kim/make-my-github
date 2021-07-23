import React from 'react';
import Layout from '../components/layout'
import Example1 from '../components/example/example1'
import Example2 from '../components/example/example2'
import Example3 from '../components/example/example3'
import {Carousel} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
  const carouselStyle= {
    width:"100%",
    height:"70%",
    padding:"50px"
  }
  return (
      <Layout>
        <section>
          <h1>Welcome to "Make My GitHub".</h1>
          <Carousel variant="dark" style={carouselStyle}>
            <Carousel.Item>
                <Example1/>
                <Carousel.Caption>
                  <h3>DevIcon 메뉴 소개</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Example2/>
                <Carousel.Caption>
                  <h3>Icon 메뉴 소개</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Example3/>
                <Carousel.Caption>
                  <h3>template 메뉴 소개</h3>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </Layout>
  )
}
