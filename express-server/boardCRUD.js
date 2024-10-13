const express = require("express");
const app = express();
let posts = []; // 게시물 리스트 (메모리 저장소)

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Read (전체 게시물 조회)
app.get("/posts", (req, res) => {
    res.json(posts);
});

// Create (게시물 추가)
app.post("/post", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    const newPost = {
        id: posts.length + 1, // 간단한 id 생성 방식
        title,
        content,
        createdAt: new Date()
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

// Update (게시물 수정)
app.put("/post/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;

    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    if (title) post.title = title;
    if (content) post.content = content;

    res.json(post);
});

// Delete (게시물 삭제)
app.delete("/post/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter((p) => p.id !== postId);

    res.json({ message: "Post deleted successfully" });
});

// 서버 시작
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});