# ein fertiges Image (Bauplan für Container) mit nginx
FROM nginx:alpine

# unsere Seite in Ordner kopieren, der von nginx ausgeliefert wird
COPY index.html /usr/share/nginx/html/index.html

