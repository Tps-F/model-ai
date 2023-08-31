import Link from 'next/link'

export default function Error404() {
  return 
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-blue-500">
          Oops! The page you are looking for was not found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          It seems like the model you're looking for does not exist.
        </p>
        <a href="/" className="mt-4 text-blue-500 hover:underline">
          Go back to the homepage
        </a>
      </div>
}