#!/bin/bash

echo "Installing dependencies for Node.js API..."
cd api
npm install

echo "Installing dependencies for React page..."
cd ../loginstrona
npm install

echo "Starting Node.js API and React page..."
cd ../api
npm start &
cd ../loginstrona
npm start &