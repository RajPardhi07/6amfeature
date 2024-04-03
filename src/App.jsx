import Footer from "./Pages/Footer"
import Nav from "./Pages/Nav"
import Page0 from "./Pages/Page0"
import Page1 from "./Pages/Page1"
import Page1post from "./Pages/Page1post"
import Page2 from "./Pages/Page2"
import Prepage1 from "./Pages/Prepage1"
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <Nav/>
      <Page0/>
      <Prepage1/>
      <Contact/>
      <Page1/>
      <Page1post/>
      <Page2/>
      <Footer/>

    </div>
  )
}

export default App