const data = [
  {
    id: 1,
    theme: "HTML",
    questions: [
      {
        title: "La première balise",
        course:
          " En HTML, on écrit des balises pour dire au navigateur ce qu'on veut afficher. La première balise qu'on utilise toujours, c’est <html>, qui indique que tout ce qu'on écrit est du code HTML. ",
        exercise: 'Entoure le mot "Bonjour" avec les balises HTML de base.',
        answer: "<html>Bonjour</html>",
      },
      {
        title: "Un vrai titre !",
        course:
          " Pour afficher un titre sur une page web, on utilise la balise <h1>. Il existe plusieurs tailles de titre de <h1> (le plus grand) à <h6> (le plus petit). ",
        exercise:
          'Écris un titre de niveau 1 qui dit "Bienvenue sur mon site".',
        answer: "<h1>Bienvenue sur mon site</h1>",
      },
    ],
  },

  {
    id: 2,
    theme: "CSS",
    questions: [
      {
        title: "Changer la couleur du texte",
        course: "En CSS, la propriété `color` change la couleur du texte.",
        exercise: " Applique la couleur rouge à un paragraphe.",
        answer: "p { color: red; }",
      },
      {
        title: "Fond coloré",
        course: "Utilise `background-color` pour changer la couleur de fond.",
        exercise: "Mets le fond bleu pour les titres `<h1>`.",
        answer: "h1 { background-color: blue; }",
      },
      {
        title: "Couleur hexadécimale",
        course: "Les couleurs peuvent être écrites en hexadécimal.",
        exercise: "Applique `#00FF00` à tous les `<h2>`",
        answer: "h2 { color: #00FF00; }",
      },
    ],
  },
  {
    id: 3,
    theme: "JavaScript",
    questions: [
      {
        title: "Créer une variable",
        course: "Une variable se déclare avec `let` ou `const`. ",
        exercise: "Crée une variable `nom` qui vaut Alice.",
        answer: "let nom = Alice;",
      },
      {
        title: "Changer la valeur",
        course: "On peut changer la valeur d’une variable avec `=`.",
        exercise: " Change la variable `nom` en Bob.",
        answer: "nom = Bob;",
      },
      {
        title: "Addition de variables",
        course:
          "Déclare deux variables `a = 5` et `b = 3`, puis crée `somme = a + b`.",
        exercise: "",
        answer: "let a = 5;let b = 3;let somme = a + b;",
      },
    ],
  },
];
