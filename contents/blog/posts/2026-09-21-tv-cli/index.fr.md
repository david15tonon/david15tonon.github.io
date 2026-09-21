---
title: tv, un petit coffre pour mes notes de session
date: 2026-09-21
description: Comment un changement d'OS qui m'a fait perdre mes notes de session m'a poussé à écrire un petit outil en ligne de commande.
---

Un changement d'OS m'a récemment fait perdre tout un tas de notes de session pour mon assistant de code — je ne les commitais jamais, pour ne pas les mélanger aux dépôts partagés avec mes collaborateurs.

Avec plusieurs projets en parallèle, un dépôt git séparé par projet pour les sauvegarder serait vite devenu encombrant. Alors j'ai écrit [`tv`](https://github.com/david15tonon/tv-cli), un petit outil en ligne de commande :

- `tv add` rattache le dossier `tasks/` d'un projet à un coffre git privé central, via un lien symbolique.
- `tv sync` commit (et pousse, si un remote est configuré) tout ce qui a changé, tous projets confondus.

Rien d'exceptionnel, et sans doute pas très utile à grand monde — mais taillé pile pour un besoin précis. Le code est sur [GitHub](https://github.com/david15tonon/tv-cli), sous licence d'usage personnel.
