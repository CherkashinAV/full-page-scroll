import usePageScroll from "./hooks/usePageScroll";
import NavDots from "./components/NavDots/NavDots";

import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

const links = ['/', '/about', '/skills', '/contacts'];

function App(){
	const [activePage, setActivePage] = usePageScroll(4, links);

	return (
		<div className="App">
			<NavDots links={links} active={activePage} setActive={setActivePage}/>
			<AnimatedRoutes />
		</div>
	);
}

export default App