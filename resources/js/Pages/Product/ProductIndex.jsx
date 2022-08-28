import AppContainer from "@/Pages/Layout/AppContainer";
import {Link} from "@inertiajs/inertia-react";
import {useForm} from "@inertiajs/inertia-react";


const ProductIndex = (props) => {
    const {elements} = props;
    const {data, submit, setData, delete: destroy} = useForm({
        id: ''
    })

    const handleDelete = (id) => {
        return destroy(route(`product.destroy`, id));
    }

    return <AppContainer props={props}>
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold ">Products</h1>
                    <p className="mt-2 text-sm ">
                        A list of all the Products.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        href={route('product.create')}
                        className="inline-flex items-center text-white dark:text-white justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add Product
                    </Link>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50 dark:bg-gray-600">
                                <tr>
                                    <th scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-6">
                                        ID
                                    </th>
                                    <th scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-6">
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold ">
                                        Price
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold ">
                                        Qty
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold ">
                                        Brand
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        Commands
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white dark:bg-gray-900">
                                {elements.data.map((element) => (
                                    <tr key={element.id}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm ">{element.id}</td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-6">
                                            {element.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm ">{element.price}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm ">{element.qty}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm ">{element.brand}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <div className="flex flex-row justify-between">
                                                <Link href={route('product.edit', element.id)}
                                                      className="mt-2 p-2 rounded-md">
                                                    Edit<span className="sr-only">, {element.name}</span>
                                                </Link>
                                                <button onClick={() => handleDelete(element.id)}
                                                        className={`bg-red-700 mt-2 text-white p-2 rounded-md`}>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div
                            className=" px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div className="flex-1 flex justify-between">
                                {
                                    elements.first_page_url &&
                                    <Link
                                        href={elements.first_page_url}
                                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md  "
                                    >
                                        First
                                    </Link>
                                }
                                {
                                    elements.next_page_url && <Link
                                        href={elements.next_page_url}
                                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md  "
                                    >
                                        Next
                                    </Link>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppContainer>
}

export default ProductIndex;
