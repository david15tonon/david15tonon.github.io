---
title: Faire en sorte que tv se sauvegarde tout seul
date: 2026-09-24
description: Un patch de suivi pour tv — rattachement automatique des projets, un bug de push silencieux, et un timer systemd pour boucler la boucle.
---

Quelques jours après avoir écrit [`tv`](https://github.com/david15tonon/tv-cli), je faisais encore `cd projet && tv add` à la main pour chaque nouveau projet — exactement le genre d'étape manuelle que l'outil était censé éliminer.

Donc `tv sync` scanne maintenant le workspace lui-même et rattache tout projet ayant un vrai dossier `tasks/` non lié avant de synchroniser — plus besoin de `tv add` par projet.

Ça a fait remonter un vrai bug : ces projets rattachés automatiquement sont commités dans le coffre *pendant* l'étape de rattachement, donc quand `sync` vérifiait ensuite s'il restait quelque chose à faire, l'arbre était déjà propre et il sautait le push — les commits restaient là, locaux seulement, et je ne m'en serais jamais rendu compte. `sync` pousse maintenant aussi dès que le `HEAD` local est en avance sur `origin`, que cette exécution ait committé quelque chose ou non.

Dernière pièce du puzzle : le push doit vraiment se faire sans moi. J'ai basculé le remote du coffre de HTTPS vers SSH (la même clé qu'utilise `tv-cli`) et branché un timer systemd utilisateur qui lance `tv sync` toutes les 15 minutes, avec `Persistent=true` pour rattraper une exécution manquée dès que la machine se réveille. Le coffre se sauvegarde maintenant tout seul sur GitHub.

Le code est sur [GitHub](https://github.com/david15tonon/tv-cli).
