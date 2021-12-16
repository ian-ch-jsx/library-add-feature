import { BrowserRouter, Link, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';
import './App.css';

function App() {
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <Link to="/books">Books</Link>
        <Switch>
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/books" component={BookList} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
