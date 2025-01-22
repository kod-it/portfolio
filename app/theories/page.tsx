import { TheoryPosts } from 'app/components/theoryPosts'

export const metadata = {
  title: 'Theories',
  description: 'Read my Theories.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Theories</h1>
      <TheoryPosts />
    </section>
  )
}
