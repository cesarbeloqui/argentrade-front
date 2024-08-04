#!/bin/bash

echo "Introduce el nombre del commit:"
read nombrecommit

git add .
git commit -m "$nombrecommit"
git push -u origin main