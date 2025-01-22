import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';

const aboutColor = "#FF5733"; // Example color

export default function Page() {
  return (
    <section>
            <p className="italic text-2xl  mb-8 text-center">
          <span className="font-semibold">Optimising reality,</span> one lazy solution at a time.
        </p>
      <h1 className="mb-2 text-4xl font-semibold tracking-tighter text-right">
        Hi, I am Akash
      </h1>
      <h1 className="mb-8 text-2xl tracking-tighter text-right">
        Software Development Engineer
      </h1>

      <p className="mb-4">
        {`When I was a kid, I was always fascinated by how things worked. From taking apart gadgets (and occasionally putting them back together) to trying to solve the toughest puzzles, I’ve always had a curious mind. Fast forward to today, and I’m still that same curious soul, but now I dismantle digital worlds instead of dismantling toys. And yes, along the way, I’ve learned to build a few "toys".
        `}
      </p>
      <h1 className="mb-8  tracking-tighter">
        Read more 
      <Link className='ml-2 mr-2 font-normal' href='/about'>
        <RoughNotation
          show
          type='highlight'
          animationDelay={250}
          animationDuration={2000}
          color={aboutColor}
        >
          about me
        </RoughNotation>
      </Link>
      or 
      <Link className='ml-2 mr-2 font-normal' href='/contact'>
        <RoughNotation
          show
          type='highlight'
          animationDelay={250}
          animationDuration={2000}
          color={aboutColor}
        >
          contact me
        </RoughNotation>
      </Link>
      
      </h1>
      
    </section>
  );
}
