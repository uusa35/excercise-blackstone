import {Head, Link} from "@inertiajs/inertia-react";
import React from "react";
import {InformationCircleIcon} from '@heroicons/react/20/solid'

const AppContainer = ({props, children}) => {
    const {mode} = props;
    return <div className={`${mode}`}>
        <Head title="Welcome"/>
        <div
            className={`${mode} relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0`}>
            <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                <Link href={route('home')} className="mx-4 text-sm text-gray-900 dark:text-white underline">
                    Home
                </Link>
                <Link href={route('product.index')} className="mx-4 text-sm text-gray-900 dark:text-white underline">
                    Task (One)
                </Link>
                <Link href={route('problem.solving.index')}
                      className="mx-4 text-sm text-gray-900 dark:text-white underline">
                    Task (Two)
                </Link>
                <Link
                    href={route('change.mode', {mode: mode === 'dark' ? 'light' : 'dark'})}
                    className="mx-4 text-sm text-gray-900 dark:text-white underline">
                    Mode
                </Link>
                {props.auth.user ? (
                    <Link href={route('dashboard')}
                          className="hidden text-sm text-gray-900 dark:text-white underline">
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link href={route('login')}
                              className="hidden text-sm text-gray-900 dark:text-white underline">
                            Log in
                        </Link>

                        <Link
                            href={route('register')}
                            className="hidden ml-4 text-sm text-gray-900 dark:text-white underline"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
            <div className="flex flex-col min-h-screen w-full p-6 text-gray-900 dark:text-white">
                <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                    <img src="https://www.blackstoneeit.com/assets/image/logo_footer.png" alt=""/>
                </div>
                <div className="w-full max-w-6xl mx-auto sm:px-6 lg:px-8">
                    {props.success && <div className="rounded-md bg-green-50  p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <InformationCircleIcon className="text-green-600 h-5 w-5 " aria-hidden="true"/>
                            </div>
                            <div className="ml-3 flex-1 md:flex md:justify-between">
                                <p className="text-sm text-black ">{props.success}</p>
                            </div>
                        </div>
                    </div>}
                    {props.error && <div className="rounded-md bg-red-50 p-4 ">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <InformationCircleIcon className="text-red-600 h-5 w-5 " aria-hidden="true"/>
                            </div>
                            <div className="ml-3 flex-1 md:flex md:justify-between">
                                <p className="text-sm text-black ">{props.error}</p>
                            </div>
                        </div>
                    </div>}
                    <div className="mt-8 p-10 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default AppContainer;
