import "./App.css";
import { Fixed } from "./components/Footers/Fixed";
import { Footer } from "./components/Footers/Footer";
import { Header } from "./components/Headers/Header";
import { MobileHeader } from "./components/Headers/MobileHeader";
import { Main } from "./components/Main";

function App() {
	let width = window.innerWidth;
	const getHeader = () => {
		if (width <= 500) {
			return <MobileHeader />;
		}
		return <Header />;
	};
	return (
		<div className="App">
			{getHeader()}
			<Main />
			<Footer />
			<Fixed />
		</div>
	);
}

export default App;
