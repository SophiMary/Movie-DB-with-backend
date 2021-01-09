import React from "react";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import { Route, Switch } from "react-router-dom";
import TVShows from "./Components/TVShows";


 const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact from="/Movie-DB/" component={Movies} />
        <Route exact from="/Movie-DB/movies" component={Movies} />
        <Route exact from="/Movie-DB/tv-shows" component={TVShows} />
      </Switch>
    </div>
  );
}

export default App