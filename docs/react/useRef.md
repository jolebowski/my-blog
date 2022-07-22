---
sidebar_position: 10
---

# useRef

`useRef` permet de conserver des valeurs entre les rendus. 

Il peut être utilisé pour stocker une valeur modifiable qui ne provoque pas de `re-render` lors de la mise à jour.

Il peut être utilisé pour accéder directement à un élément DOM.

```javascript
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const count = useRef(0); //It's like to do it that : const count = {current: 0}.

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        placeholder=""
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h1>Render count : {count.current}</h1>
    </>
  );
}

```
useRef() ne renvoie qu'un seul élément. Il renvoie un objet appelé current.

L'objet peut conserver une valeur pendant toute la durée de vie du composant. 


Dans React, on peut ajouter un refattribut à un élément pour y accéder directement dans le DOM.

```javascript
import { useRef } from "react";

export default function App() {
  const focusPoint = useRef(null);

  const onClickHandler = () => {
    focusPoint.current.value = "jolebowski";
    focusPoint.current.focus();
  };
  return (
    <div>
      <div>
        <button onClick={onClickHandler}>ACTION</button>
      </div>
      <label>Click on the action button to focus and populate the text.</label>
      <br />
      <textarea ref={focusPoint} />
    </div>
  );
}

```
