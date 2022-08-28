import React from 'react';
import {Link, Head} from '@inertiajs/inertia-react';
import AppContainer from "@/Pages/Layout/AppContainer";

export default function Welcome(props) {
    return (
        <AppContainer props={props}>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6">
                    <div className="flex items-center">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                        >
                            <path
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>

                        <div className="ml-4 text-lg leading-7 font-semibold">
                            <Link
                                href={route('product.index')}
                                className="underline text-gray-900 dark:text-white"
                            >
                                Exercise One (1)
                            </Link>
                        </div>
                    </div>

                    <div className="ml-12">
                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                            Task One are Product CRUD Routes.
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex items-center">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                        >
                            <path
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>

                        <div className="ml-4 text-lg leading-7 font-semibold">
                            <Link
                                href={route('problem.solving')}
                                className="underline text-gray-900 dark:text-white"
                            >
                                Exercise Two (2)
                            </Link>
                        </div>
                    </div>

                    <div className="ml-12">
                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                            Task Two is a Problem Solving.
                        </div>
                    </div>
                </div>

            </div>
        </AppContainer>

    );
}
