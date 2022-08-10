import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { postUpdated } from './postsSlice'
import { Link } from 'react-router-dom'

export default function EditPost({ match, ...props }) {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const post = posts.find((post) => post.id === match.params.id)
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)
  const handleSubmit = () => {
    if (!title || !content) return
    dispatch(
      postUpdated({
        content,
        title,
        id: post.id,
      })
    )
  }
  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={handleSubmit}>
          Save Post
        </button>
      </form>
      <Link to="/">Go Home</Link>
    </section>
  )
}
