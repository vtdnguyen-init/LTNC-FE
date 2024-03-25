'use client'

export default function Example() {
  return (
    <>
    <form>
      <div className="space-y-6 px-60">
        <div className="border-b border-gray-900/10 pb-3">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Doctor's Profile</h2>
        </div>
        <div className="border-b border-gray-900/10 pb-5">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Full name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
              Date of birth
              </label>
              <div className="mt-2">
                <input
                  id="Date of birth"
                  name="Date of birth"
                  type="date"
                  autoComplete="birth"
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 grid grid-cols-3 gap-3 w-full">
            <div className="w-40">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="col-span-2">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-3  grid grid-cols-3 gap-4">
          <div>
            <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Education</legend>
              <div className="mt-2 space-y-6">
                <div className="relative flex gap-x-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="bachelor"
                      name="education"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="bachelor" className="font-medium text-gray-900">
                      Bachelor
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="master"
                      name="education"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="master" className="font-medium text-gray-900">
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
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="doctorate" className="font-medium text-gray-900">
                    Doctorate
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Years of Experience</legend>
              <div className="mt-2 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Less than 2 years"
                    name="exp"
                    type="radio"
                    value=""
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Less than 2 years" className="block text-sm font-medium leading-6 text-gray-900">
                  Less than 2 years
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Less than 4 years (More than 2)"
                    name="exp"
                    type="radio"
                    value=""
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Less than 4 years (More than 2)" className="block text-sm font-medium leading-6 text-gray-900">
                  Less than 4 years (More than 2)
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="More than 4 years"
                    name="exp"
                    type="radio"
                    value=""
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="More than 4 years" className="block text-sm font-medium leading-6 text-gray-900">
                  More than 4 years
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <label htmlFor="country" className=" text-sm font-semibold leading-6 text-gray-900">
                Specialty: 
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Attending</option>
                  <option>Surgeon</option>
                  <option>Nurse</option>
                  <option>Internist</option>
                </select>
              </div>
            </fieldset>
            <fieldset className="py-2">
              <label htmlFor="number" className="text-sm font-semibold leading-6 text-gray-900">
                Salary ($USD):
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="salary"
                  id="salary"
                  autoComplete="number"
                  className="dark:text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            </fieldset>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end px-60 gap-x-6">
        <a href="/dashboard/doctor" type="button" className="text-sm font-semibold leading-6 text-gray-900">
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
