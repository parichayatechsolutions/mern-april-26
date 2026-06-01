<table className="border w-full border-gray-600 p-2 mt-2 table-auto">
                        <thead >
                            <tr>
                                {
                                    heading.map((head, index) => {
                                        return (
                                            <th className="text-2xl text-black border  border-gray-600 p-2">{head.title} </th>
                                        )
                                    })
                                }
                                <th className="text-2xl text-black p-2 col-span-2">{ph} </th>
                            </tr>
                        </thead>
                        <tbody className="border w-full border-gray-600 p-2 text-center table-auto">
                            <tr>
                                <td className="border border-gray-600 p-2"></td>
                                <td className="border border-gray-600 p-2"></td>
                                <td className="border border-gray-600 p-2"></td>
                                <td className="border border-gray-600 p-2">Edit</td>
                                <td className="border border-gray-600 p-2">Delete</td>
                            </tr>
                        </tbody>
                    </table>