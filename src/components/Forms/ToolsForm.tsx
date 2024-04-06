"use client";

export default function Example() {
  return (
    <>
      <form>
        <div className="lg:px20 xl:px space-y-6 px-10 md:px-30 lg:px-30 xl:px-60">
          <div className="border-gray-900/10 border-b pb-3">
            <h2 className="text-gray-900 text-base font-semibold leading-7">
              Tool&apos;s Management
            </h2>
          </div>
          <div className="pb-5">
            <h2 className="text-gray-900 text-base font-semibold leading-7">
              Information
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Name:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="date"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Expired Date:
                </label>
                <div className="mt-2">
                  <input
                    id="expired"
                    name="expired"
                    type="date"
                    autoComplete="expired"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="brand"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Brand:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="country"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Origin:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="origin"
                    id="origin"
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="street-address"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Imported Ammount:
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="ammount"
                    id="ammount"
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="street-address"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Price per item ($USD):
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6 px-60">
          <a
            href="/dashboard/patient"
            type="button"
            className="text-gray-900 text-sm font-semibold leading-6"
          >
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
  );
}
