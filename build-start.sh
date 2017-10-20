bold=$(tput bold)
LCyan ='\033[1;35m'

git pull  /home/gabriel/gitHub/gabriel/kivy-build/

echo '${LCyan}${bold}Git Pull! Finished'

cp -f /home/gabriel/gitHub/gabriel/kivy-build/*  /home/gabriel/pyLab/

echo '${LCyan}${bold}Moved finished!'

echo '${lCyan}${bold}Buildozer start!'

(cd /home/gabriel/pyLab; /home/gabriel/gitHub/gabriel/gary/./buildozer-start.sh)

echo '${LCyan}${bold}Buildozer DONE!'
