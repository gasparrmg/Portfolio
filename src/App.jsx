import "./App.css"
import Header from "./components/header/Header"
import Introduction from "./components/introduction/Introduction"
import Work from "./components/work/Work"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Socials from "./components/socials/Socials"

function App() {
  return (
    <div className="app">
		<Header/>
		<Socials/>
		<div className="sections">
			<Introduction/>
			<Work/>
			<Projects/>
			<Contact/>
    	</div>
    </div>
  );
}

export default App;