import Link from "next/link";
export default function Example() {
    return (
        <section className=" dark:bg-gray-900">
        <div className=" gap-8 items-center py-16 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className=" rounded-full w-130 h-96 " src="../images/sides/hospital_bed.jpg" alt="sides image"/>
            <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Welcome to BK Hospital's Management Platform</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Choose what section you want to go to: </p>


                <Link href="/dashboard/doctor" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:text-gray-600 rounded-md group-hover:bg-opacity-0">
                Doctor
                </span>
                </Link>


                <Link href="/dashboard/patient" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:text-gray-600 rounded-md group-hover:bg-opacity-0">
                Patient
                </span>
                </Link>


                <Link href="/dashboard/medicine" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:text-gray-600 rounded-md group-hover:bg-opacity-0">
                Medicine
                </span>
                </Link>

                <Link href="/calendar" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:text-gray-600 rounded-md group-hover:bg-opacity-0">
                    Calendar
                </span>
                </Link>

            </div>
        </div>
        </section>
    )
}