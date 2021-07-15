import { Navbar, Body } from './components'


function Footer() {
  return (
    <div>
      <p>Copyright 2021</p>
    </div>
  )
}


function App() {
  return (
    <div>
     <Navbar />
     <Body/> 
     <Footer />
    </div>
  );
}

export default App;


