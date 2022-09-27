# React Router

```js
import { BrowserRouter } from "react-router-dom";
```

```js
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
```

### Outlet

```js
import { Outlet } from "react-router-dom";
```

```js
return (
  <>
    <Home catagories={catagories} />
    <Outlet />
  </>
);
```

```js
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/homePage";

const Test = () => <h1>I am the best</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}>
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  );
};
export default App;
```

## index

```js
<Route path="/" element={<Navigation />}>
  <Route index element={<HomePage />} />
  <Route path="test" element={<Test />} />
</Route>
```

## Link

```js
import { Outlet, Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/test">
            Test
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
```
