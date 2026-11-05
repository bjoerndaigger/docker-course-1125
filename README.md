# docker-course-1125

A small two-service example for learning Docker and Docker Compose: a static frontend served by nginx and a minimal Node.js backend.

## Project structure

```
.
├── compose.yaml        # defines and connects both services
├── frontend/           # static website served by nginx
│   ├── Dockerfile
│   └── index.html
└── backend/            # plain Node.js HTTP server
    ├── Dockerfile
    └── server.js
```

## Services

| Service    | Image                | Base image     | Port (host:container) |
| ---------- | -------------------- | -------------- | --------------------- |
| `frontend` | `meine-seite-frontend` | `nginx:alpine` | `8080:80`             |
| `backend`  | `meine-seite-backend`  | `node:alpine`  | `3000:3000`           |

- **frontend**: serves `index.html`, which fetches `http://localhost:3000` on load and shows the backend's message on the page.
- **backend**: answers every request with the JSON `{ "message": "Hallo vom Backend!" }` and allows cross-origin requests (CORS), so the browser can call it from the frontend.

## Usage

```sh
docker compose up --build
```

Then open:

- Frontend: <http://localhost:8080>. It should show "Hallo aus dem Container!" and the message from the backend.
- Backend: <http://localhost:3000>. It returns the raw JSON response.

Stop and remove the containers with:

```sh
docker compose down
```
