import express from 'express';
import { generateSlug } from 'random-word-slugs';
import { exec } from "child_process"

const app = express();
const PORT = 9000;

app.use(express.json());

app.post('/api/v1/project', (req, res) => {
  const { gitUrl } = req.body;
  const slug = generateSlug();

  exec(`docker run --name ${slug} -e GITHUB_REPO=${gitUrl} -d -p 3000:3000 test-2`)

  res.json({
    "url": gitUrl,
    "slug": slug
  })
});

app.post('/stop', (req, res) => {
  const { slug } = req.body;

  exec(`docker stop ${slug}`)

  res.json({
    "url": "gitUrl",
    "slug": slug
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});