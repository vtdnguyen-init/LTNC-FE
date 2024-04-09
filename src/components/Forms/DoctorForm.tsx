"use client";

export default function Example() {
  return (
    <>
      <form>
        <div className="lg:px20 xl:px space-y-6 px-10 md:px-30 lg:px-30 xl:px-60">
          <div className="border-gray-900/10 border-b pb-3">
            <h2 className="text-gray-900 text-base font-semibold leading-7">
              Doctor&aposs Profile
            </h2>
          </div>
          <div className="border-gray-900/10 border-b pb-5">
            <h2 className="text-gray-900 text-base font-semibold leading-7">
              Personal Information
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="date"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Date of birth
                </label>
                <div className="mt-2">
                  <input
                    id="Date of birth"
                    name="Date of birth"
                    type="date"
                    autoComplete="birth"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="grid w-full grid-cols-3 gap-3 sm:col-span-3">
                <div className="w-40">
                  <label
                    htmlFor="country"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Gender
                  </label>
                  <div className="mt-2">
                    <select
                      id="gender"
                      name="gender"
                      autoComplete="gender"
                      className="text-gray-900 ring-gray-300 block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="country"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="text-gray-900 ring-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Viet Nam</option>
                      <option>USA</option>
                      <option>Europe</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-gray-900/10 grid grid-cols-3  gap-4 border-b pb-3">
            <div>
              <fieldset>
                <legend className="text-gray-900 text-sm font-semibold leading-6">
                  Education
                </legend>
                <div className="mt-2 space-y-6">
                  <div className="relative flex gap-x-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="bachelor"
                        name="education"
                        type="radio"
                        className="border-gray-300 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="bachelor"
                        className="text-gray-900 font-medium"
                      >
                        Bachelor or equivelent
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="master"
                        name="education"
                        type="radio"
                        className="border-gray-300 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="master"
                        className="text-gray-900 font-medium"
                      >
                        Master
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="doctorate"
                        name="education"
                        type="radio"
                        className="border-gray-300 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="doctorate"
                        className="text-gray-900 font-medium"
                      >
                        Doctorate / PhD
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div>
              <fieldset>
              <label
                  htmlFor="year"
                  className="text-gray-900 text-sm font-semibold leading-6"
                >
                  Experience (Year):
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="experience"
                    id="experience"
                    autoComplete="number"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <label
                  htmlFor="specialty"
                  className=" text-gray-900 text-sm font-semibold leading-6"
                >
                  Specialty:
                </label>
                <div className="mt-2">
                  <select
                    id="specialty"
                    name="specialty"
                    className="text-slate-900 ring-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>General (Da Khoa)</option>
                    <option>Otorhinolaryngology (Tai mui hong)</option>
                    <option>Ophthalmologist (Mat)</option>
                    <option>Dermatology (Da Lieu)</option>
                    <option>Cardiology (Tim mach)</option>
                    <option>Pediatrician (Nhi)</option>
                  </select>
                </div>
              </fieldset>
              <fieldset className="py-2">
                <label
                  htmlFor="number"
                  className="text-gray-900 text-sm font-semibold leading-6"
                >
                  Salary ($USD):
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="salary"
                    id="salary"
                    autoComplete="number"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6 px-60">
          <a
            href="/dashboard/doctor"
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
