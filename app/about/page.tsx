import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';

const aboutColor = "#FF5733"; // Example color

export const metadata = {
  title: 'About Me',
  description: 'About | Akash Dip',
}

export default function Page() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      {/* Flex container for image and content */}
      <div className="flex flex-col md:flex-row items-center mb-10">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/3 text-center">
          <img
            src="/akash1.png" // Replace with your image path
            alt="Akash Dip"
            className="w-40 h-40 md:w-full md:h-full rounded-full object-cover mx-auto"
          />
          <h1 className="text-center text-3xl font-semibold tracking-tighter mt-4">
            Akash Dip
          </h1>
          <h1 className="text-center mb-8 text-md tracking-tighter">
            Software Development Engineer
          </h1>
        </div>

        {/* Right Section - Text */}
        <div className="md:ml-6 w-full md:w-2/3">
          <h1 className="font-bold text-4xl mb-6 tracking-tighter">About Me</h1>
          <p className="mb-6 text-lg leading-relaxed">
            Hi, I’m Akash Dip, a software engineer passionate about building dynamic web applications with the MERN stack. 
            I specialize in creating scalable infrastructures, automating workflows, and leveraging cloud technologies 
            to deliver innovative solutions. My goal is to enhance user experiences through data-driven insights 
            and responsive designs.
          </p>

          <section className="mb-10">
            <h2 className="font-semibold text-2xl mb-4">Skills</h2>
            <ul className="grid grid-cols-2 gap-4">
              <li><strong>Languages:</strong> AppScript, Java, JavaScript (React.js, Node.js), SQL, Python</li>
              <li><strong>Tools:</strong> Advanced Google Sheets, AppSheet, MongoDB, Git, Trello</li>
              <li><strong>Services:</strong> AWS (S3, EC2, Lambda, IAM), Google Cloud, Razorpay, Gupshup</li>
              <li><strong>Soft Skills:</strong> Leadership, Event Management, Public Speaking</li>
            </ul>
          </section>
          
          <div className="flex justify-center items-center">
            <Link className="text-2xl ml-2 mr-2 flex items-center" target='_blank' href="https://drive.google.com/file/d/17z6lJ1z6fQdhmtusWC0GSdqnh7ETkM-9/view?usp=sharing" download>
              <RoughNotation
                show
                type="highlight"
                animationDelay={250}
                animationDuration={2000}
                color={aboutColor}
              >
                Download Resume
              </RoughNotation>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
