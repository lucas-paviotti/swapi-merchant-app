import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientForm from "./ClientForm";
import App from "../containers/App";
import ReviewOrder from "./ReviewOrder";
import Thanks from "./Thanks";
import NotFound from "./NotFound";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={ClientForm} />
			<Route path="/ships" component={App} />
			<Route path="/order" component={ReviewOrder} />
			<Route path="/checkout" component={Thanks} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;