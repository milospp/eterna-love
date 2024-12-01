#!/bin/bash

echo "Pulling latest code from repository..."
git pull origin main

echo "Loading source"
source /srv/eternalove/venv/bin/activate


echo "Installing dependencies..."
pip install -r requirements.txt

echo "Running migrations..."
python manage.py migrate

echo "Restarting the server..."
sudo systemctl restart eternalove

echo "Deployment complete."