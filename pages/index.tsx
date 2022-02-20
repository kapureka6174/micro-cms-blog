import type { NextPage } from 'next'
import Head from 'next/head'
import { client } from '../libs/client'
import Post from '../components/Post'

const Home: NextPage = ({ blog }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-600	 py-2">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {blog.map((blog) => (
          <Post key={blog.id} data={blog} />
        ))}
      </main>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
