import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export const Posts = () => {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);

  if (!error && !data) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (data.length === 0) {
    return <div>データは空です</div>
  }

  return (
    <ol>
      {data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  )
}