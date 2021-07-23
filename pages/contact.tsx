import Layout from '../components/layout'
import Sidebar from '../components/navbar'

export default function About() {
  const style={
    width:"50px",
    height:"50px"
  }
  return (
    <Layout>
        <section>
          <p>
              67crystalk@gmail.com
          </p>
          <p>
            https://github.com/cri-kim
          </p>
          <p>
            <img src="https://cdn.rawgit.com/konpa/devicon/master/icons/react/react-original.svg" style={style}/>
          </p>
        </section>
    </Layout>
  )
}