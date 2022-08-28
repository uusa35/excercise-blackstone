import AppContainer from "@/Pages/Layout/AppContainer";
import {Link, useForm} from "@inertiajs/inertia-react";

const ProblemSolvingIndex = (props) => {
    console.log('props', props);
    const {data, post, setData, reset} = useForm({
        file: ''
    })

    const submit = (e) => {
        e.preventDefault();
        reset('file');
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
                                    props.elements ?
                                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                            <div className="flex items-center mb-4">
                                                <div className="sm:flex-auto">
                                                    <h1 className="text-xl text-center font-semibold ">File Name : {props.elements[0]['order_name']}</h1>
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
                                                    {props.elements.map((element) => (
                                                        <tr key={element.id}>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{element.id}</td>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-6">
                                                                {element.area}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{element.name}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{element.qty}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{element.brand}</td>
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
                                                    Reset
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
                                                    herf={route(`home`)}
                                                    className=" py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
