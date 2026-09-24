---
title: Making tv back itself up, without me
date: 2026-09-24
description: A follow-up patch for tv — auto-attaching projects, a silent push bug, and a systemd timer to close the loop.
---

A few days after writing [`tv`](https://github.com/david15tonon/tv-cli), I was still doing `cd project && tv add` by hand for every new project — exactly the kind of manual step the tool was supposed to remove.

So `tv sync` now scans the workspace itself and attaches any project with a real, unlinked `tasks/` folder before syncing — no more per-project `tv add`.

That surfaced a real bug: those auto-attached projects get committed to the vault *inside* the attach step, so by the time `sync` checked whether there was anything left to do, the tree was already clean and it skipped the push — commits sat there, local-only, and I'd never have noticed. `sync` now also pushes whenever local `HEAD` is ahead of `origin`, commit-this-run or not.

Last piece: pushing still has to actually happen without me around. I moved the vault's remote from HTTPS to SSH (the same key `tv-cli` itself uses) and wired a systemd user timer to run `tv sync` every 15 minutes, with `Persistent=true` so a missed run catches up after the machine wakes up. The vault now backs itself up to GitHub on its own.

Code's on [GitHub](https://github.com/david15tonon/tv-cli).
