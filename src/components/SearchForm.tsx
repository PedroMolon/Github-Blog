import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const postsSearchSchema = z.object({
  query: z.string(),
})

type PostsSearchSchema = z.infer<typeof postsSearchSchema>

export function SearchForm({ onSearch }) {
  const { register, handleSubmit } = useForm<PostsSearchSchema>({
    resolver: zodResolver(postsSearchSchema),
  })

  function handleSearchPosts(data: PostsSearchSchema) {
    onSearch(data.query)
  }

  return (
    <div className="mt-20 mb-12">
      <form
        onSubmit={handleSubmit(handleSearchPosts)}
        className="flex flex-col gap-3"
      >
        <div className="flex items-center justify-between">
          <h1 className="font-sans text-3xl text-baseSubtitle">Publicações</h1>
          <span className="font-sans text-xl text-baseText">6 publicações</span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="bg-baseInput py-3 px-4 ring-1 ring-baseBorder rounded-lg text-baseText placeholder:text-baseLabel focus:outline-none focus:ring-baseLabel hover:outline-none hover:ring-1 hover:ring-baseLabel"
          {...register('query')}
        />
      </form>
    </div>
  )
}
