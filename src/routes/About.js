import React from 'react'
import { fakeDb } from "../components/blog-post/BlogPost"

export default function About() {
  let db = fakeDb()
  return (
    <div>
      <p>{db[0].name}</p>

      {db[0].content}
    </div>
  )
}