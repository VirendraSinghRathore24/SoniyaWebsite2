import React from 'react'

function Card({post}) {
  return (
    <div class="relative overflow-x-auto">
    
        
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {post.fullname}
                </th>
                <td class="px-6 py-4">
                    {post.mobile}
                </td>
                <td class="px-6 py-4">
                    {post.email}
                </td>
                <td class="px-6 py-4">
                    {post.message}
                </td>
            </tr>
        </tbody>
    
</div>
  )
}

export default Card