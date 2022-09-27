# Props Children

Le `this.props.children` est utilisé pour afficher tout ce que vous incluez entre les balises d'ouverture et de fermeture lorsque vous invoquez un composant.

```js
// In Button component
const Button = ({ children }) => {
  return <button>{children}</button>;
};
```

```js
/// In Login component
<Button type="submit">Login</Button>
```
