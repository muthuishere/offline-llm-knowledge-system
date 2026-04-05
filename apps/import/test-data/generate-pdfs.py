#!/usr/bin/env python3
"""
Generates minimal but valid PDF files for testing the local-llm-import-export app.
No external libraries required — uses raw PDF format.
"""

import struct
import zlib
import os

def build_pdf(title: str, sections: list[tuple[str, str]]) -> bytes:
    """Build a PDF with a title and list of (heading, body) sections."""

    def encode_pdf_string(text: str) -> str:
        """Escape special PDF string characters."""
        return text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')

    def wrap_text(text: str, max_chars: int = 85) -> list[str]:
        """Wrap text to fit within page width."""
        words = text.split()
        lines = []
        current = ''
        for word in words:
            if len(current) + len(word) + 1 <= max_chars:
                current = (current + ' ' + word).strip()
            else:
                if current:
                    lines.append(current)
                current = word
        if current:
            lines.append(current)
        return lines

    # Build the content stream
    stream_lines = []
    stream_lines.append('BT')
    stream_lines.append('/F1 18 Tf')
    stream_lines.append('50 770 Td')
    stream_lines.append(f'({encode_pdf_string(title)}) Tj')
    stream_lines.append('')

    y = 730
    for heading, body in sections:
        # Section heading
        stream_lines.append(f'/F2 13 Tf')
        stream_lines.append(f'50 {y} Td')
        stream_lines.append(f'({encode_pdf_string(heading)}) Tj')
        y -= 20

        # Body text
        stream_lines.append('/F1 10 Tf')
        for para in body.split('\n'):
            para = para.strip()
            if not para:
                y -= 8
                continue
            for line in wrap_text(para):
                if y < 60:
                    # Simple page break simulation — just keep going (single page for test)
                    y = 60
                    break
                stream_lines.append(f'50 {y} Td')
                stream_lines.append(f'({encode_pdf_string(line)}) Tj')
                y -= 14
        y -= 10

    stream_lines.append('ET')
    content = '\n'.join(stream_lines).encode('latin-1', errors='replace')

    # Build PDF objects
    objects = []

    # Object 1: Catalog
    objects.append(b'1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n')

    # Object 2: Pages
    objects.append(b'2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n')

    # Object 3: Page
    objects.append(
        b'3 0 obj\n'
        b'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]\n'
        b'   /Contents 4 0 R\n'
        b'   /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\n'
        b'endobj\n'
    )

    # Object 4: Content stream
    objects.append(
        f'4 0 obj\n<< /Length {len(content)} >>\nstream\n'.encode() +
        content +
        b'\nendstream\nendobj\n'
    )

    # Object 5: Regular font (Helvetica)
    objects.append(
        b'5 0 obj\n'
        b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica\n'
        b'   /Encoding /WinAnsiEncoding >>\n'
        b'endobj\n'
    )

    # Object 6: Bold font (Helvetica-Bold)
    objects.append(
        b'6 0 obj\n'
        b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold\n'
        b'   /Encoding /WinAnsiEncoding >>\n'
        b'endobj\n'
    )

    # Build xref table
    header = b'%PDF-1.4\n%\xe2\xe3\xcf\xd3\n'
    offsets = []
    body = b''
    offset = len(header)
    for obj in objects:
        offsets.append(offset)
        body += obj
        offset += len(obj)

    xref_offset = len(header) + len(body)
    xref = f'xref\n0 {len(objects) + 1}\n'
    xref += '0000000000 65535 f \n'
    for off in offsets:
        xref += f'{off:010d} 00000 n \n'

    trailer = (
        f'trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\n'
        f'startxref\n{xref_offset}\n%%EOF\n'
    )

    return header + body + xref.encode() + trailer.encode()


# --- Define the PDFs ---

pdfs = [
    (
        'Getting Started with Docker',
        [
            ('What is Docker?', '''Docker is a platform for developing, shipping, and running applications
inside lightweight containers. Containers package your application and its
dependencies together, ensuring it runs the same everywhere.

Unlike virtual machines, containers share the host OS kernel and start in
milliseconds. A typical Node.js app container is 100-200 MB vs a VM at 2+ GB.'''),

            ('Installing Docker', '''On macOS, download Docker Desktop from docker.com/products/docker-desktop.
Install the .dmg and follow the setup wizard. Docker Desktop includes the
Docker Engine, Docker CLI, and Docker Compose.

Verify installation:
  docker --version
  docker compose version

On Ubuntu Linux:
  curl -fsSL https://get.docker.com | sh
  sudo usermod -aG docker $USER
  newgrp docker'''),

            ('Core Concepts', '''IMAGE: A read-only template used to create containers. Think of it as a
class in object-oriented programming. Images are built from a Dockerfile.

CONTAINER: A running instance of an image. Like an object instantiated
from a class. Containers are isolated but share the host kernel.

DOCKERFILE: A text file with instructions to build an image. Each
instruction adds a layer. Layers are cached, making rebuilds fast.

REGISTRY: A storage and distribution system for images. Docker Hub is the
default public registry. You can run private registries too.

VOLUME: Persistent storage that lives outside the container filesystem.
Data in volumes survives container restarts and deletions.

NETWORK: Containers on the same Docker network can communicate by name.
Docker creates a default bridge network automatically.'''),

            ('Essential Commands', '''Build an image from a Dockerfile in the current directory:
  docker build -t myapp:latest .

Run a container from an image:
  docker run -d -p 3000:3000 --name myapp myapp:latest

List running containers:
  docker ps

Stop and remove a container:
  docker stop myapp && docker rm myapp

View container logs:
  docker logs -f myapp

Execute a command inside a running container:
  docker exec -it myapp sh

Pull an image from Docker Hub:
  docker pull postgres:16

List local images:
  docker images

Remove unused images to free disk space:
  docker image prune -a'''),

            ('Writing a Dockerfile', '''A Dockerfile for a Node.js application:

  FROM node:20-alpine
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci --only=production
  COPY . .
  EXPOSE 3000
  USER node
  CMD ["node", "server.js"]

Best practices:
- Use a specific image tag, not latest, for reproducibility
- Use alpine variants for smaller images
- Copy package.json before source files to leverage build cache
- Run as a non-root user (USER node) for security
- Use multi-stage builds to keep final image small'''),

            ('Docker Compose for Local Development', '''Docker Compose lets you define multi-container applications in a YAML file.

  version: "3.9"
  services:
    app:
      build: .
      ports:
        - "3000:3000"
      environment:
        DATABASE_URL: postgresql://postgres:password@db:5432/todos
      depends_on:
        db:
          condition: service_healthy
      volumes:
        - .:/app
        - /app/node_modules

    db:
      image: postgres:16-alpine
      environment:
        POSTGRES_PASSWORD: password
        POSTGRES_DB: todos
      volumes:
        - postgres_data:/var/lib/postgresql/data
      healthcheck:
        test: ["CMD-SHELL", "pg_isready -U postgres"]
        interval: 5s
        timeout: 5s
        retries: 5

  volumes:
    postgres_data:

Start everything: docker compose up
Stop everything: docker compose down
Rebuild after Dockerfile changes: docker compose up --build'''),

            ('Troubleshooting Common Issues', '''Container exits immediately:
  Check logs with: docker logs <container-name>
  Common causes: app crashes on startup, missing environment variable,
  port already in use, entrypoint command not found.

Cannot connect to container port:
  Ensure you published the port with -p host:container
  Check the app inside the container is binding to 0.0.0.0, not 127.0.0.1

Volume permission errors on Linux:
  The container user may not have write permission to the mounted host directory.
  Fix: docker run --user $(id -u):$(id -g) ...

Image build is slow:
  Check your .dockerignore file excludes node_modules, .git, and build artifacts.
  Reorganize Dockerfile to put rarely changing layers first.

Out of disk space:
  docker system prune -a --volumes (WARNING: removes all unused data)'''),
        ]
    ),
    (
        'JavaScript Async Patterns Guide',
        [
            ('Callbacks', '''The original async pattern in JavaScript. A function passed as an argument
to be called when an async operation completes.

  fs.readFile("data.txt", "utf8", function(err, data) {
    if (err) {
      console.error("Error:", err);
      return;
    }
    console.log(data);
  });

Problems with callbacks: "callback hell" (deeply nested), error handling
is inconsistent (sometimes first arg, sometimes thrown), difficult to
compose multiple async operations.'''),

            ('Promises', '''Promises represent a value that will be available in the future.
They have three states: pending, fulfilled, rejected.

  fetch("/api/todos")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => setLoading(false));

Promise.all — run multiple promises in parallel, wait for all:
  const [user, todos] = await Promise.all([fetchUser(id), fetchTodos(id)]);

Promise.allSettled — like all, but does not reject if one fails:
  const results = await Promise.allSettled([p1, p2, p3]);

Promise.race — resolves/rejects with the first settled promise:
  const result = await Promise.race([fetch(url), timeout(5000)]);

Promise.any — resolves with the first fulfilled promise:
  const fastest = await Promise.any([mirror1, mirror2, mirror3]);'''),

            ('Async/Await', '''Async/await is syntactic sugar over Promises. It makes async code
look and behave like synchronous code.

  async function loadTodos(userId: number): Promise<Todo[]> {
    try {
      const response = await fetch(`/api/users/${userId}/todos`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Failed to load todos:", error);
      throw error;
    }
  }

Key rules:
- async functions always return a Promise
- await can only be used inside an async function
- Use try/catch for error handling
- Avoid await in loops — use Promise.all instead for parallel ops

Common mistake — sequential when parallel would be faster:
  // SLOW: each awaits before the next starts
  const user = await fetchUser(id);
  const todos = await fetchTodos(id);

  // FAST: both start simultaneously
  const [user, todos] = await Promise.all([fetchUser(id), fetchTodos(id)]);'''),

            ('Generators and Async Generators', '''Generators are functions that can pause and resume execution.
Async generators combine generators with async/await.

  async function* streamTodos(userId: number) {
    let page = 1;
    while (true) {
      const todos = await fetchTodosPage(userId, page);
      if (todos.length === 0) return;
      yield todos;
      page++;
    }
  }

  // Consume the async generator
  for await (const page of streamTodos(42)) {
    console.log("Got page:", page);
  }

Use cases: paginated APIs, streaming data processing, infinite scrolls.'''),

            ('AbortController — Cancelling Async Operations', '''AbortController lets you cancel fetch requests and other async operations.

  function fetchWithTimeout(url: string, ms: number) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);

    return fetch(url, { signal: controller.signal })
      .finally(() => clearTimeout(timer));
  }

  // Cancel on component unmount (React)
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/todos", { signal: controller.signal })
      .then(r => r.json())
      .then(setTodos)
      .catch(err => {
        if (err.name !== "AbortError") setError(err);
      });
    return () => controller.abort();
  }, []);'''),

            ('Error Handling Patterns', '''Never swallow errors silently. Always handle or propagate.

Result pattern (avoid throwing for expected errors):
  type Result<T> = { ok: true; value: T } | { ok: false; error: string };

  async function safeFetch<T>(url: string): Promise<Result<T>> {
    try {
      const res = await fetch(url);
      if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
      return { ok: true, value: await res.json() };
    } catch (e) {
      return { ok: false, error: String(e) };
    }
  }

  const result = await safeFetch<Todo[]>("/api/todos");
  if (!result.ok) {
    showError(result.error);
    return;
  }
  setTodos(result.value);'''),
        ]
    ),
]


out_dir = os.path.dirname(os.path.abspath(__file__))
for filename, sections in pdfs:
    safe_name = filename.lower().replace(' ', '-').replace('/', '-') + '.pdf'
    pdf_bytes = build_pdf(filename, sections)
    path = os.path.join(out_dir, safe_name)
    with open(path, 'wb') as f:
        f.write(pdf_bytes)
    print(f'Created: {path} ({len(pdf_bytes):,} bytes)')

print('Done.')
