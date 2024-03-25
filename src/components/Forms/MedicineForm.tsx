'use client'

export default function Example() {
  return (
    <>
    <form>
      <div className="space-y-6 px-60">
        <div className="border-b border-gray-900/10 pb-3">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Medicine's Management</h2>
        </div>
        <div className="pb-5">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Information</h2>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete=""
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
              Expired Date:
              </label>
              <div className="mt-2">
                <input
                  id="expired"
                  name="expired"
                  type="date"
                  autoComplete="expired"
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
                Brand:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  autoComplete=""
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div className="col-span-2">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Origin:
              </label>
              <div className="mt-2">
              <input
                  type="text"
                  name="origin"
                  id="origin"
                  autoComplete=""
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            

            <div className="col-span-2">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Imported Ammount:
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="ammount"
                  id="ammount"
                  autoComplete=""
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Price per box ($USD):
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="price"
                  id="price"
                  autoComplete=""
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end px-60 gap-x-6">
        <a href="/dashboard/patient" type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </a>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>  
    </form>
</>
  )
}
