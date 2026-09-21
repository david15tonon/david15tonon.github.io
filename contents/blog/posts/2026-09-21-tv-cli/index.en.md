---
title: tv, a small vault for my session notes
date: 2026-09-21
description: How losing my session notes to an OS switch pushed me to write a small command-line tool.
---

Switching OS recently wiped out a pile of session notes for my coding assistant — I never committed them, to avoid mixing them into the repos I share with collaborators.

With several projects going at once, a separate git repo per project to back them up would have gotten cluttered fast. So I wrote [`tv`](https://github.com/david15tonon/tv-cli), a small command-line tool:

- `tv add` attaches a project's `tasks/` folder to a central private vault, via a symlink.
- `tv sync` commits (and pushes, if a remote is configured) everything that changed, across every project.

Nothing groundbreaking, and probably not very useful to most people — but built precisely for one specific need. The code is on [GitHub](https://github.com/david15tonon/tv-cli), under a personal-use license.
