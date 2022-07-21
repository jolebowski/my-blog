---
sidebar_position: 3
---

# Les cycle de vie des composants


Chaque composant de React a un cycle de vie que vous pouvez surveiller et manipuler au cours de ses trois phases principales.

Ces trois phases sont : `Mounting`, `Updating` et `Unmounting`

![React component lifecycle](../../static/img/react-component-lifecycle.png)

## Mounting

React a quatre méthodes intégrées qui sont appelées, dans cet ordre, lors du montage d'un composant :

- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

> :warning: **La méthode render()** est obligatoire et sera toujours appelée, les autres sont optionnelles et seront appelées si vous les définissez.

### Constructor

La méthode constructor() est appelée avant toute autre chose, lorsque le composant est lancé, et c'est l'endroit naturel pour mettre en place l'état initial et les autres valeurs initiales.

La méthode constructor() est appelée avec les props, comme arguments, et vous devriez toujours commencer par appeler super(props) avant toute autre chose, ce qui initiera la méthode constructor du parent et permettra au composant d'hériter des méthodes de son parent (React.Component).

```javascript
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "jolebowski"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
      </div>
    );
  }
}
```
### render()

La méthode `render()` est requise, et c'est la méthode qui affiche réellement le HTML dans le DOM.


```javascript
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>jolebowski</h1>
      </div>
    );
  }
}

export default App;
```
### ComponentDidMount()

La méthode `componentDidMount()` est appelée après le rendu du composant.

```javascript
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "jolebowski"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ userName: "jordan" });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>My really name is {this.state.userName}</h1>
      </div>
    );
  }
}
```

## Updating

Un composant est mis à jour chaque fois qu'il y a un changement dans l'état ou les accessoires du composant.

React possède cinq méthodes intégrées qui sont appelées, dans cet ordre, lorsqu'un composant est mis à jour :

- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()


> :warning: **La méthode render()** est obligatoire et sera toujours appelée, les autres sont optionnelles et seront appelées si vous les définissez.

### render()

La méthode `render()` est bien sûr appelée lorsqu'un composant est mis à jour, il doit re-render le HTML au DOM, avec les nouveaux changements.

```javascript
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "jolebowski"
    };
  }

  handleClick = () => {
    this.setState({
      userName: "Jordan"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <button type="button" onClick={this.handleClick}>
          Change name
        </button>
      </div>
    );
  }
}
```
### componentDidUpdate()

La méthode componentDidUpdate est appelée après la mise à jour du composant dans le DOM.

Lorsque le composant est monté, il est rendu avec la couleur favorite "rouge".

Lorsque le composant a été monté, une minuterie change l'état, et la couleur devient "jaune".

Cette action déclenche la phase de mise à jour, et comme ce composant a une méthode componentDidUpdate, cette méthode est exécutée et écrit un message dans l'élément DIV vide :


```javascript 
import { Component } from 'react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "jolebowski"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        userName: "jordan"
      });
    }, 1000);
  }

  componentDidUpdate() {
    document.getElementById(
      "myDiv"
    ).innerHTML = `My really name's${this.state.userName}`;
  }

  render() {
    return (
      <div>
        <h1>My name's {this.state.userName}</h1>
        <div id="myDiv"></div>
      </div>
    );
  }
}

```

## Unmounting

Le démontage d'un composant. 

React a une seule méthode intégrée qui est appelée lorsqu'un composant est démonté : 

 - componentWillUnmount()

### ComponentWillUnmount()

La méthode componentWillUnmount est appelée lorsque le composant est sur le point d'être retiré du DOM.

```javascript
import { Component } from "react";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      show: true
    };
  }

  delHeader = () => {
    this.setState({
      show: false
    });
  };

  render() {
    let myHeader;
    if (this.state.show) {
      myHeader = <Child />;
    }
    return (
      <div>
        {myHeader}
        <button type="button" onClick={this.delHeader}>
          Deleted Header
        </button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("This Component gonna be deleted");
  }
  render() {
    return <h1>Hello world !</h1>;
  }
}
```

