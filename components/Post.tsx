import Link from 'next/link'
import { emojis } from '../libs/emoji'

const Post = ({ data }) => {
  return (
    <Link href={`/blog/${data.id}`}>
      <a>
        <div className="h-64 w-96 rounded-xl bg-gray-200 duration-300 hover:scale-110">
          <div className="flex h-2/5 items-center justify-center rounded-t-xl bg-slate-400 text-6xl">
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </div>
          <div className="h-1/4">
            <div
              className={
                'flex items-start pt-2 ' +
                (data.publishedAt !== data.updatedAt
                  ? 'justify-evenly'
                  : 'pl-3')
              }
            >
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 inline h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {data.publishedAt.substr(0, 10)}
              </span>
              {data.publishedAt !== data.updatedAt && (
                <span className="text-slate-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 inline h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>

                  {data.updatedAt.substr(0, 10)}
                </span>
              )}
            </div>
            <div className="ml-3 mt-1 w-16 rounded-full bg-indigo-200 px-2 py-1 text-xs text-indigo-500">
              {data.category}
            </div>
          </div>
          <div className="flex h-1/3 justify-center px-6 pt-2 text-xl">
            {data.title}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Post
