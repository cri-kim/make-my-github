import Head from 'next/head'
import styles from './layout.module.css'
import NavBar from './navbar'
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
    children:
      | JSX.Element
      | JSX.Element[]
      | string
      | string[];
}

const Layout = ({children}: Props) =>{
    return (
        <Container>
            <Head>
                <title>Make My Github</title>
            </Head>
            
            <NavBar />
            <main className={styles.main}>{children}</main>
        </Container>
    )
};

export default Layout;