import { useEffect, useState } from 'react'
import { Profile } from '../components/Profile'
import { SearchForm } from '../components/SearchForm'
import { api } from '../api/api'
import { dateFormatter } from '../utils/formatter'

export interface PostsProps {
  user: any
  length: number
  number: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
}

interface SearchPostsProps {
  items: PostsProps[]
}

export function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  async function fetchPosts(query?: string) {
    const response = await api.get<SearchPostsProps>('/search/issues', {
      params: {
        q: query + `repo:PedroMolon/Github-Blog`,
      },
    })
    setPosts(response.data.items)
  }

  function handleSearch(query: string) {
    setSearchQuery(query)
  }

  useEffect(() => {
    fetchPosts(searchQuery)
  }, [searchQuery])

  return (
    <div>
      <Profile />
      <div className="w-full max-w-[854px] m-auto">
        <SearchForm onSearch={handleSearch} />
        <div className="grid grid-cols-2 gap-8">
          {posts.map((post) => {
            return (
              <div
                key={post.number}
                className="w-[416px] h-[260px] flex flex-col gap-5 overflow-clip p-8 bg-basePost rounded-lg hover:outline-none hover:ring-1 hover:ring-baseLabel hover:cursor-pointer"
              >
                <div className="flex gap-4">
                  <h1 className="text-3xl font-sans text-baseTitle">
                    {post.title}
                  </h1>
                  <span className="text-baseSpan">
                    {dateFormatter.format(new Date(post.created_at))}
                  </span>
                </div>
                <p className="text-xl text-baseText">{post.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
