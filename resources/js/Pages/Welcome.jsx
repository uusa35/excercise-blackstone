import React from 'react';
import {Link, Head} from '@inertiajs/inertia-react';
import AppContainer from "@/Pages/Layout/AppContainer";

export default function Welcome(props) {
    return (
        <AppContainer props={props}>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                             className="w-8 h-8 text-gray-500"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
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
                            Task One : Product CRUD Routes.
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
                                href={route('problem.solving.index')}
                                className="underline text-gray-900 dark:text-white"
                            >
                                Exercise Two (2)
                            </Link>
                        </div>
                    </div>

                    <div className="ml-12">
                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                            Task Two : Problem Solving.
                        </div>
                    </div>
                </div>

            </div>
        </AppContainer>

    );
}
