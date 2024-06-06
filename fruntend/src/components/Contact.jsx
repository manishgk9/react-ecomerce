import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-3">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Contact Us</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        If you have any questions or concerns, please feel free to reach out to us.
      </p>
      <form className="mt-6">
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 dark:text-gray-200">Name</label>
          <input className="mt-2 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200" type="text" placeholder="Your name" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 dark:text-gray-200">Email</label>
          <input className="mt-2 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200" type="email" placeholder="Your email" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 dark:text-gray-200">Message</label>
          <textarea className="mt-2 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200" rows="4" placeholder="Your message"></textarea>
        </div>
        <button onClick={()=>{alert("Corently this service is not working..")}} className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Send</button>
      </form>
    </div>
  );
};

export default Contact;
