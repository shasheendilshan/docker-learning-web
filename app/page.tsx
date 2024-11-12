import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Docker Learning App</title>
        <meta name="description" content="Learn Docker with a Next.js and Tailwind CSS application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="w-full px-6 py-12 bg-white shadow-md">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
              Learn Docker 
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl">
              Master Docker by building and deploying a Next.js application.
            </p>
            <div className="mt-8 flex flex-wrap justify-center space-x-4">
              <a
                href="https://docs.docker.com/get-started/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700"
              >
                Get Started with Docker
              </a>
              <a
                href="https://docs.docker.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
              >
                Docker Documentation
              </a>
              <a
                href="https://docs.docker.com/get-started/docker_cheatsheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-green-600 border border-green-600 rounded-md hover:bg-green-50"
              >
                Docker Cheat Sheet
              </a>
            </div>
          </div>
        </section>

        {/* Docker Learning Section */}
        <section className="w-full px-6 py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Why Learn Docker?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Docker helps you package and run applications in isolated containers. It simplifies deployment and scaling, making it an essential tool for modern web development.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800">Containerization</h3>
              <p className="mt-2 text-gray-600">
                Use Docker to package your application and its dependencies into a single container for consistency across environments.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800">Simplified Deployment</h3>
              <p className="mt-2 text-gray-600">
                Easily deploy your Next.js app to any environment using Docker, ensuring consistent performance.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800">Scalability</h3>
              <p className="mt-2 text-gray-600">
                Leverage Docker&apos;s capabilities to scale your applications effortlessly as your project grows.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}