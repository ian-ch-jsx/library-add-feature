import { BrowserRouter, Link, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import BookList from './views/Books/BookList';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <Link to="/books">Books</Link>

        <Switch>
          <Route path="/books">
            <BookList />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
