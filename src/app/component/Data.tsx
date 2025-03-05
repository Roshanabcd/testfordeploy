import React from "react";

const Page = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/users" || "/api/users", {
      cache: "no-store",
      next: { revalidate: 0 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const users = await response.json();

    return (
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-2 text-left">SN</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Player ID</th>
                <th className="px-4 py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.tittle}</td>
                  <td className="px-4 py-2">{user.description}</td>
                  <td className="px-4 py-2">{user.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div className="text-red-500">Error loading users...</div>;
  }
};

export default Page;