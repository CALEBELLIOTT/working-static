import React, { useEffect, useState } from 'react'
import { api } from "../services/AxiosService"

export default function Home() {

  let [posts, setPosts] = useState()

  useEffect(async () => {
    let res = await api.get('')
    console.log(res.data);
    setPosts(res.data)
    drawPosts(res.data)
  }, [])

  function drawPosts(p) {
    p.forEach(p => {
      document.getElementById('title-' + p.id).innerHTML = p.title.rendered
    })
  }

  return (
    <div>
      {posts?.map((p) => {
        return (
          <div id={'title-' + p.id}>
          </div>
        )
      })}
    </div>
  )
}