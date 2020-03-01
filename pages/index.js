import Head from 'next/head'
import { Button, Alert } from 'reactstrap';

const Home = () => (
  <div className="container">

    <Head>
      <title>App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div>
        <div>
          <Alert color="primary">Hello I am Bootstrap</Alert>
          <Button color="primary">Hello from nextjs</Button>
        </div>
      </div>
    </main>

  </div>
)

export default Home
