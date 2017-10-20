git pull  /home/gabriel/gitHub/gabriel/kivy-build/

cp -f /home/gabriel/gitHub/gabriel/kivy-build/*  /home/gabriel/pyLab/

echo 'Moved finished!'

echo 'Buildozer start!'

(cd /home/gabriel/pyLab; /home/gabriel/gitHub/gabriel/gary/./buildozer-start.sh)

echo 'Buildozer DONE!'
