import {ExclamationIcon, SearchIcon} from "@heroicons/react/solid";
import {FC}                          from "react";
import {Link}                        from "@remix-run/react";

const NoResults: FC<{ href: string }> = ({href}) =>
    {
        return <div className="text-center py-6">
            <ExclamationIcon className={`h-12 w-12 text-gray-400 mx-auto`}/>
            <h3 className="mt-2 text-sm font-medium text-gray-900">We didn't get any results!</h3>
            <p className="mt-1 text-sm text-gray-500">A quick suggestion would be expanding the <span
                className={`font-bold`}>Scan Hours</span> to a higher number, or lowering the <span
                className={`font-bold`}>Sale Amount</span>.</p>
            <div className="mt-6">
                <Link
                    to={href}
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    <SearchIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
                    Search again
                </Link>
            </div>
        </div>;
    };


export default NoResults;
