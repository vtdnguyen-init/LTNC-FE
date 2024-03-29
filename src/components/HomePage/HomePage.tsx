import Link from "next/link";
import Image from "next/image";
export default function Example() {
  return (
    <section className=" dark:bg-gray-900">
      <div className=" mx-auto max-w-screen-xl items-center gap-8 px-4 py-16 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <Image
          className=" rounded-full "
          src="/images/sides/hospital_bed.jpg"
          alt="sides image"
          width={520} // replace with your image's width
          height={384}
        />
        <div className="mt-4 md:mt-0">
          <h2 className="text-gray-900 mb-4 text-4xl font-extrabold tracking-tight dark:text-white">
            Welcome to BK Hospital&apos;s Management Platform
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 font-light md:text-lg">
            Choose what section you want to go to:{" "}
          </p>

          <Link
            href="/dashboard/doctor"
            className="text-gray-900 group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-black dark:focus:ring-blue-800"
          >
            <span className="dark:text-gray-600 relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              Doctor
            </span>
          </Link>

          <Link
            href="/dashboard/patient"
            className="text-gray-900 group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-black dark:focus:ring-cyan-800"
          >
            <span className="dark:text-gray-600 relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              Patient
            </span>
          </Link>

          <Link
            href="/dashboard/medicine"
            className="text-gray-900 group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-black dark:focus:ring-green-800"
          >
            <span className="dark:text-gray-600 relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              Medicine
            </span>
          </Link>

          <Link
            href="/calendar"
            className="text-gray-900 group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-medium hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-black dark:focus:ring-pink-800"
          >
            <span className="dark:text-gray-600 relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              Calendar
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
