import AppContainer from "@/Pages/Layout/AppContainer";
import {Link, useForm} from "@inertiajs/inertia-react";

const ProblemSolvingIndex = (props) => {
    const {data, post, setData, reset} = useForm({
        file: ''
    })

    const submit = (e) => {
        e.preventDefault();
        // reset('file');
        return post(route('problem.solving.store', {
            data,
            onSuccess: () => reset('file'),
        }))
    }

    return <AppContainer props={props}>
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold ">Problem Solving</h1>
                    <p className="mt-2 text-sm ">
                        You can Upload your file according to the template given. (Only csv extension allowed)
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        href={route('home')}
                        className="text-white inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium  shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Back
                    </Link>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-opacity-5 md:rounded-lg">
                            <div className=" shadow px-4 py-5 sm:rounded-lg sm:p-6">
                                {
                                    props.order && props.order.element ?
                                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                            <div
                                                className="grid grid-cols-1 md:grid-cols-1 border rounded-md border-gray-200 ">
                                                <div className="flex items-center mb-4">
                                                    <div className="sm:flex-auto">
                                                        <h1 className="text-xl my-2 text-center font-semibold ">Click to download files generated</h1>
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
                                                            <a
                                                                target={`_blank`}
                                                                download
                                                                href={route('problem.solving.download', props.order.firstFile)}
                                                            >
                                                                {props.order.firstFile} (Download)</a>
                                                        </div>
                                                    </div>

                                                    <div className="ml-12">
                                                        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">
                                                            {props.order.firstContent}
                                                        </p>
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
                                                            <a
                                                                target={`_blank`}
                                                                download
                                                                href={route('problem.solving.download', props.order.secondFile)}
                                                            >
                                                                {props.order.secondFile} (Download)</a>
                                                        </div>
                                                    </div>

                                                    <div className="ml-12">
                                                        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">
                                                            {`${props.order.secondContent}`}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="flex items-center mb-4">
                                                <div className="sm:flex-auto">
                                                    <h1 className="text-xl my-2 text-center font-semibold ">File Name
                                                        : {props.order.element[0]['order_name']}</h1>
                                                    <h1 className="text-xl text-center font-semibold ">Order
                                                        Details</h1>
                                                </div>
                                            </div>
                                            <div
                                                className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                                <table className="min-w-full divide-y divide-gray-300">
                                                    <thead className="bg-gray-50 dark:bg-gray-600">
                                                    <tr>
                                                        <th scope="col"
                                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-6">
                                                            ID
                                                        </th>
                                                        <th scope="col"
                                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-6">
                                                            Area
                                                        </th>
                                                        <th scope="col"
                                                            className="px-3 py-3.5 text-left text-sm font-semibold ">
                                                            Product Name
                                                        </th>
                                                        <th scope="col"
                                                            className="px-3 py-3.5 text-left text-sm font-semibold ">
                                                            Qty
                                                        </th>
                                                        <th scope="col"
                                                            className="px-3 py-3.5 text-left text-sm font-semibold ">
                                                            Brand Name
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody
                                                        className="divide-y divide-gray-200 bg-white dark:bg-gray-900">
                                                    {props.order.element.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{item.id}</td>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-6">
                                                                {item.area}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{item.product_name}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{item.qty}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{item.brand}</td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="flex justify-end mt-4">
                                                <Link
                                                    href={route('problem.solving.reset')}
                                                    className="text-white inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium  shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                                                >
                                                    Reset & Upload another
                                                </Link>
                                            </div>
                                        </div> :
                                        <form className="space-y-6" onSubmit={submit} method="post">
                                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                                <div className="md:col-span-1">
                                                    <h3 className="text-lg font-medium leading-6">Add your csv file</h3>
                                                    <p className="mt-1  text-sm">ID111,Area Name,Product Name,3,Brand
                                                        Name</p>
                                                </div>
                                                <div className="mt-5 md:mt-0 md:col-span-2">
                                                    <div className="grid grid-cols-6 gap-6">
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="file"
                                                                   className="block text-sm font-medium ">
                                                                Upload csv file
                                                            </label>
                                                            <input
                                                                type="file"
                                                                name="file"
                                                                id="file"
                                                                autoComplete="file"
                                                                accept=".csv"
                                                                required
                                                                onChange={e => setData('file', e.target.files[0])}
                                                                // onChange={handleChange}
                                                                className="mt-1 text-black focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <Link
                                                    href={route(`home`)}
                                                    className=" py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium  hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Cancel
                                                </Link>
                                                <button
                                                    type="submit"
                                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  text-white dark:text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Upload
                                                </button>
                                            </div>
                                        </form>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppContainer>
}

export default ProblemSolvingIndex;
