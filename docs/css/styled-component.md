# Styled-Components

Il est plus intuitif de regarder les composants que de lire des grands pavés de CSS.

Pour utiliser du styled component dans un projet il faut l'importer

```js
import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// in UI
import { NavigationContainer } from "file";
<NavigationContainer></NavigationContainer>;
```

Styled génère de manière unique les noms de classe :

```HTML
<a class="sc-hLBbgP bopkMm">Home</a>
```

Styled est livré avec tous les éléments HTML que vous avez l'habitude d'utiliser comme :

```js
import styled from "styled-components";
styled.h1;
styled.h2;
styled.h3;
styled.button;
styled.span;
// etc...
```

Utilisation de `Link` de react-router-dom avec styled-components

```js
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// in UI
<NavLink to="/">Home</NavLink>;
```

Vous pouvez ajouter le mot-clé `as` qui permet d'ajouter un élément HTML pour le voir afficher dans le rendu

```js
<NavLink as="span" onClick={signOutUser}>
  Sign out
</NavLink>

/// in render
<span class="sc-gKPRtg figZmk">Sign out</span>
```

Un élément peut dépendre d'un autre élément

```js
export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  ....
`;
export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
```

Pour modifier le css d'un sélécteur :

```js
export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 310px;
  height: 340px;
  display: flex;

  button {
    margin-top: auto;
  }
`;
```

Vous pouvez cibler à l'intérieur de vos styled-components d'autres styled-components :

```js
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 310px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto;
  }
`;
```

```js
import { ReactComponent as ShoppingIconSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingIconSvg)`
  width: 36px;
  height: 36px;
`;

// in render
<ShoppingIcon />;
```

Nous pouvons faire passer des props dans un styled-components

```js
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

/// in render

<BackgroundImage imageUrl={imageUrl} />;
```
