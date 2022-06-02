#!/bin/bash
gfetch=$(git fetch 2>&1 >/dev/null)
git add --all
sleep 1
git commit -m "Automated sync: $gstatus"
sleep 1
git pull --rebase
sleep 1
git push
gstatus=`git status`
notify-send 'git fetch'  "$gfetch"
notify-send 'git sync' "$gstatus"
