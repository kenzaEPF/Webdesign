Bonjour, 

Voici un petit résumé de ce que j'ai mis en place, de ce que je n'ai pas fait et les difficultés 
que j'ai pu rencontrer.

	Evidemment j'ai utilisé les classes bootstrap pour ESSAYER d'avoir quelque chose de pas
trop moche malgré mon manque d'expérience en la matière.
En ce qui concerne l'"application responsive" j'ai mis en place les fonctions qui permettent à 
la page de s'adapter à la taille de l'écran cependant il m'était difficile de voir ce que cela
donnait avec la machine virtuelle sur laquelle on ne peut réduire la taille de l'écran comme sur 
une machine physique. Ainsi je me suis basée sur ce que l'on a fait au tout début,
en espèrant que cela donne quelque chose sur vos machines...

Ensuite, pour l'utilisation de SASS, j'ai utilisé une variable pour le fond du site mais pas de mixin car je ne savais pas pour quoi l'utiliser.
J'ai utilisé du nesting pour "rassembler" btn et h1 de jumbotron.

	J'ai utilisé, comme demandé, l'architecture MVC en partant de deux fichiers JSON : un
avec  les données en français et le deuxième avec les données en anglais. Ainsi j'ai fait les 
deux controllers pour le main.js (pour la page en français) et english.js (pour la page en 
anglais).
	Il y a les deux main pour chacune des pages et ensuite j'ai fait les routeProvider pour
pouvoir changer la langue du CV.

	En ce qui concerne la directive, j'en ai fait une pour stocker la mise en forme de la partie 
"education" réutilisable dans les 2 pages. Au début cela ne fonctionnait pas car j'avais oublié 
d'ajouter cette directive en minuscule et au singulier dans l'index!

	Cependant, je n'ai pas eu le temps de rendre fonctionnel la barre de recherche parce que 
je me suis rendue compte au dernier moment que mon JSON n'était pas adapté au ng-repeat.
Car quand j'ai commencé à le faire, je n'avais pas pris en compte la possibilité de faire une
recherche sur un tableau de compétences...


	Voilà, j'ai fait quelque chose de proportionnel à mes compétences (c'est-à-dire assez 
basique) mais qui m'assure que cela fonctionne correctement pour changer de langue et que 
les éléments du CV sont bien retranscrits.
De plus, j'ai essayé au maximum de respecter le cahier des charges fournis.

Merci pour vos cours et pour votre machine virtuelle qui m'a quand même permise de suivre
vos exercices.
Et merci pour votre patience...

BOUCHERIT Kenza 
4A-EPF
2013-2014