// import Link from 'next/link'
// import { formatDate, getTheoryPosts } from 'app/theories/utils'

// export function TheoryPosts() {
//   let allBlogs = getTheoryPosts()

//   return (
//     <div>
//       {allBlogs
//         .sort((a, b) => {
//           if (
//             new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
//           ) {
//             return -1
//           }
//           return 1
//         })
//         .map((post) => (
//           <Link
//             key={post.slug}
//             className="flex flex-col space-y-1 mb-4"
//             href={`/theories/${post.slug}`}
//           >
//             <div>
//             <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
//               <p className="w-[100px] tabular-nums">
//                 {formatDate(post.metadata.publishedAt, false)}
//               </p>
//               <p className="tracking-tight">
//                 <strong>{post.metadata.title}</strong>
//               </p>
//               </div>
//               <p className="tracking-tight">
//                 {post.metadata.summary}
//               </p>
//             </div>
//           </Link>
//         ))}
//     </div>
//   )
// }
import Link from 'next/link'
import { formatDate, getTheoryPosts } from 'app/theories/utils'

export function TheoryPosts() {
  let allBlogs = getTheoryPosts()

  return (
    <div className="space-y-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="block bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            href={`/theories/${post.slug}`}
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
                <p className="w-[100px] text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="tracking-tight text-xl font-semibold text-gray-900 dark:text-white">
                  {post.metadata.title}
                </p>
              </div>
              <p className="tracking-tight text-gray-700 dark:text-gray-300">
                {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
