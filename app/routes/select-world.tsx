import EarthIcon from "~/icons/EarthIcon";
import {CalendarIcon, CheckIcon, ColorSwatchIcon, LocationMarkerIcon} from "@heroicons/react/solid";
import {Link} from "@remix-run/react";
import SelectWorld from "~/components/form";


export default function () {
    return (<div>
        <main className="flex-1">
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                Character name?</h2>
                            <div
                                className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <EarthIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                               aria-hidden="true" />
                                    ?
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <ColorSwatchIcon
                                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                        aria-hidden="true"/>
                                    ?
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <LocationMarkerIcon
                                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                        aria-hidden="true"/>
                                    ?
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                  aria-hidden="true"/>
                                    Last updated January 9, 2020
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <Link
              to={`/`}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
            Save
          </Link>
        </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <>
                        <div>
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="md:col-span-1">
                                    <div className="px-4 sm:px-0">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">Server/World Selection</h3>
                                        <p className="mt-1 text-sm text-gray-600">
                                            The selected server will change what marketplace your queries are run against.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <form action="#" method="POST">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                                <SelectWorld />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:block" aria-hidden="true">
                            <div className="py-5">
                                <div className="border-t border-gray-200"/>
                            </div>
                        </div>
                    </>
                </div>
            </div>

        </main>


    </div>)
}