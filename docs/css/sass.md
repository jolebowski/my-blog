---
sidebar_position: 3
---

# Sass (Syntactically Awesome Style Sheets)

`Sass` est un langage de feuille de style compilé en `CSS`. Il vous permet d'utiliser des variables , des règles imbriquées , des mixins , des fonctions , etc., le tout avec une syntaxe entièrement compatible `CSS`. `Sass` aide à garder les feuilles de style volumineuses bien organisées et facilite le partage de la conception au sein et entre les projets.

Rend le CSS beaucoup plus facile à lire et à écrire.

```css
/* css */
.categories-container {
  background-color: red;
  padding: 10px;
}
.categories-container .category-container {
  background-color: green;
  padding: 20px;
}
.categories-container .category-container .category-body-container {
  background-color: blue;
  padding: 30px;
}
```

```scss
/* scss */
.categories-container {
  background-color: red;
  padding: 10px;
  .category-container {
    background-color: green;
    padding: 20px;

    .category-body-container {
      background-color: blue;
      padding: 30px;
    }
  }
}
```
