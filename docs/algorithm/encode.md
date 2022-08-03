---
sidebar_position: 1
---

# Encode

La fonciton envode renvoie un message encodé.

Elle reçoit un paramètre plainText, qui est une chaîne de caractères par exemple aaaabeccaaa.

Vous devez l'encoder en comptant les occurrences consécutives de chaque lettre, par exemple dans aaaabcccaaa.

4 fois la lettre a
puis 1 b
puis 3 c
puis 3 a

```js
function encode(plainText) {
  const arrayText = plainText.match(/([a-zA-Z])\1*/g) || null;
  let txt = "";
  arrayText.map((itm) => {
    const flatedArray = [itm.length, itm.charAt(0)].flat();
    for (let t of flatedArray) {
      txt += t;
    }
  });
  return txt;
}
console.log(encode("aaaabcccaaa"));
```
