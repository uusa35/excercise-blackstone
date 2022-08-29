import AppContainer from "@/Pages/Layout/AppContainer";
import {Link, useForm} from "@inertiajs/inertia-react";
import {useCallback} from "react";

const ProductCreate = (props) => {
    const {data, post, setData} = useForm({
        name: '',
        price: '',
        qty: '',
        brand: 'BOSS'
    })

    const handleChange = useCallback((e) => {
        setData(values => ({
            ...values,
            [e.target.id]: e.target.value,
        }))
    })

    const submit = (e) => {
        e.preventDefault();
        return post(route('product.store', data))
    }

    return <AppContainer props={props}>
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold ">Add New Product Form</h1>
                    <p className="mt-2 text-sm ">
                        Create New Product.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        href={route('product.index')}
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
                                <form className="space-y-6" onSubmit={submit} method="post">
                                    <div className="md:grid md:grid-cols-3 md:gap-6">
                                        <div className="md:col-span-1">
                                            <h3 className="text-lg font-medium leading-6">Product Information</h3>
                                            <p className="mt-1  text-sm">All Fields are required.</p>
                                        </div>
                                        <div className="mt-5 md:mt-0 md:col-span-2">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="name" className="block text-sm font-medium ">
                                                        Product name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        autoComplete="name"
                                                        required
                                                        onChange={handleChange}
                                                        className="mt-1 text-black focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="qty" className="block text-sm font-medium ">
                                                        Qty
                                                    </label>
                                                    <input
                                                        required
                                                        type="number"
                                                        max={99}
                                                        name="qty"
                                                        id="qty"
                                                        autoComplete="qty"
                                                        onChange={handleChange}
                                                        className="mt-1 text-black focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-3 sm:col-span-3">
                                                    <label htmlFor="price" className="block text-sm font-medium ">
                                                        Price
                                                    </label>
                                                    <input
                                                        required
                                                        type="number"
                                                        max={999}
                                                        name="price"
                                                        id="price"
                                                        autoComplete="price"
                                                        onChange={handleChange}
                                                        className="mt-1 text-black focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-3 sm:col-span-3">
                                                    <label htmlFor="brand" className="block text-sm font-medium ">
                                                        Brand
                                                    </label>
                                                    <select
                                                        id="brand"
                                                        name="brand"
                                                        autoComplete="brand-name"
                                                        onChange={handleChange}
                                                        required
                                                        defaultValue={data.brand}
                                                        className="mt-1 text-black text-green-600 block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                    >
                                                        <option value={`Calvin Klein`}>Calvin Klein</option>
                                                        <option value={`BOSS`}>BOSS</option>
                                                        <option value={`Gucci`}>Gucci</option>
                                                        <option value={`Samsung`}>Samsung</option>
                                                        <option value={`Apple`}>Apple</option>
                                                    </select>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <Link
                                            href={route(`product.index`)}
                                            className=" py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium  hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Cancel
                                        </Link>
                                        <button
                                            type="submit"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppContainer>
}

export default ProductCreate;
