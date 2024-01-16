import Main from "../modules/pages/Main";
import Contacts from "../modules/pages/Contacts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../modules/pages/About";
import Projects from "../modules/pages/Projects";

const RouterWrapper = () => {
	const routesData = [
		{ path: '/', component: Main },
		{ path: '/contacts', component: Contacts },
		{ path: '/about', component: About },
		{ path: '/projects', component: Projects },
	];

	return (
		<BrowserRouter>
			<Routes>
				{routesData.map(({ path, component }) => (
					<Route key={path} path={path} Component={component} />
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default RouterWrapper;

