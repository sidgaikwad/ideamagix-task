import React from 'react'



const Tabs =() => {
  return (
    <>
<div class="bg-white mx-auto">
    <nav class="flex flex-col md:flex  md:flex-row  mx-8">
        <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 font-medium border-blue-500">
            Overview
        </button>
        <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            ELigibility
        </button>
        <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Preparation
        </button>
        <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            About Treatment
        </button>
        <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Post-Treatment Care
        </button>
        <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Recovery Tips
        </button>
    </nav>
</div>
    </>
  );
}

export default Tabs;
