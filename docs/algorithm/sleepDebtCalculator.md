Calculateur de dette de sommeil
Saviez-vous que les girafes dorment 4,6 heures par jour ? Nous, les humains, avons besoin de plus que cela. Si nous ne dormons pas assez, nous accumulons une dette de sommeil. Dans ce projet, nous allons calculer si vous dormez suffisamment chaque semaine à l'aide d'un calculateur de dette de sommeil.

Le programme déterminera les heures de sommeil réelles et idéales pour chaque nuit de la semaine passée.

Enfin, il calculera, en heures, la distance qui vous sépare de votre objectif de sommeil hebdomadaire.

```js
const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 8;
      break;
  }
};
const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  console.log(`actualSleepHours : ${actualSleepHours}`);
  console.log(`idealSleepHours : ${idealSleepHours}`);

  if (actualSleepHours === idealSleepHours) {
    console.log("the user got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("the user got more sleep than needed");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("the user should get some rest");
  } else {
    console.log("Error");
  }
};

console.log(calculateSleepDebt());
```
