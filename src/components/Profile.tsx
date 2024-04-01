import { Github, Users, Building, SquareArrowOutUpRight } from 'lucide-react'
import { api } from '../api/api'
import { useEffect, useState } from 'react'

export interface User {
  name: string
  avatar_url: string
  login: string
  bio: string
  followers: number
  company: string | null
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState<User>()
  async function fetchUser(query?: string) {
    const response = await api.get<User>(`/users/${query}`, {
      params: {
        q: query,
      },
    })
    setUser(response.data)
  }
  useEffect(() => {
    fetchUser('PedroMolon')
  }, [])

  return (
    <div className="w-full max-w-[864px] h-auto m-auto -mt-24 bg-baseProfile py-8 px-10 rounded-lg flex gap-8 shadow-2xl">
      <div>
        <img src={user?.avatar_url} alt="" className="w-80 rounded-lg" />
      </div>
      <div className="w-full flex flex-col py-4 relative">
        <h1 className="font-sans font-semibold text-3xl text-baseTitle">
          {user?.name}
        </h1>
        <p className="h-full font-sans text-2xl text-baseSubtitle mt-2 mb-6">
          {user?.bio}
        </p>
        <div className="flex items-center gap-6 text-baseLabel">
          <div className="flex items-center gap-2">
            <Github className="size-8" />
            <span className="text-baseSubtitle">{user?.login}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="size-8" />
            <span className="text-baseSubtitle">{user?.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="size-8" />
            <span className="text-baseSubtitle">{user?.followers}</span>
          </div>
        </div>
        <a
          href={user?.html_url}
          target="_blank"
          className="flex items-center gap-2 text-blue text-base absolute top-0 right-0 hover:underline"
          rel="noreferrer"
        >
          <span className="text-sm">GITHUB</span>
          <SquareArrowOutUpRight className="size-4" />
        </a>
      </div>
    </div>
  )
}
