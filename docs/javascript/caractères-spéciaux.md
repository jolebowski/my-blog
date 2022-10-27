---
sidebar_position: 4
---

# Caractères spéciaux

## `\n nouvelle ligne` && `\t tabulation`

`\n` et `\t` sont uniques, car ils ajoutent des espaces supplémentaires à vos chaînes. Un caractère de saut de ligne ajoutera un saut de ligne et un caractère de tabulation fera avancer la ligne jusqu'au prochain taquet de tabulation.

```javascript
console.log(`Haut haut\n\tbas bas`);
```

## `\" \"`

```javascript
console.log('We are "Vikings"'); // We are "Vikings"'
```

## ASCII

Les chaînes sont comparées caractère par caractère dans l'ordre alphabétique. Chaque caractère a une valeur numérique spécifique provenant de la valeur ASCII.

Pour connaitre la valeur ASCII d'un caractère particulier.

```javascript
console.log("a".charCodeAt(0)); // 97
```
