import React from 'react'

export default function PostsPage() {
    const title = '애국가'
    const content = '동해물과 백두산이...'
  return (
    <div>
        <h1 className="text-3xl font-bold text-red-500">포스트 페이지</h1>
        <p> Title: {title}</p>
        <p> Content: {content}</p>
    </div>
  )
}
