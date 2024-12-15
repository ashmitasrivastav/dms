import React from 'react';
import SelectInput from '../Fields/SelectInput';

import MultiLineInput from '../Fields/MultiLineInput'
import FileUpload from '../Fields/FileUpload';
import RTE from '../RTE/RTE';

import { useForm } from 'react-hook-form';

function DraftPolicy() {
    const country = ["Select country", "India", "Malaysia", "Australia", "Singapore", "USA", "UK", "The Netherland"];
    const companycode = ["Select Sub category", "Option 1", "Option 2", "Option 3"];
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        // Your form logic here
    });

    return (
        <div className="mx-6 mt-1 p-10 rounded-lg">
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="pagenidex" className="text-gray-400 my-auto">Page Index</label>
                    <input type="number" name="" id="pagenidex" placeholder="Number" className="bg-white h-10 border-solid border border-gray-300 rounded-md" />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="country" className="text-gray-400 my-auto">Country</label>
                    <SelectInput label="category" options={country} id="country" />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="companycode" className="text-gray-400 my-auto">Company Code</label>
                    <SelectInput label="category" options={companycode} id="companycode" />
                </div>
            </div>

            <input className="bg-transparent border-solid w-full p-2 border border-gray-300 rounded" type="text" placeholder="Requested for" required />
            <input className="bg-transparent border-solid w-full p-2 border border-gray-300 rounded" type="text" placeholder="Requested for" required />
            <SelectInput label="category" options={country} />

            <div className="mx-2">
                <label htmlFor="email">First Name:</label>
                <input type="email" id="email" name="email" value="John" />
            </div>
            <div className="mx-2">
                <label htmlFor="email">Last Name:</label>
                <input type="email" id="email" name="email" value="Doe" />
            </div>
            <div className="mx-2">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value="john.doe@example.com" />
            </div>

            <RTE label="Content :" name="content" control={control} width={300} />

            <div className="flex flex-row gap-4 m-auto">
                <FileUpload />
                <button className="w-full max-h-10 mt-4 bg-blue-600 text-white p-2 rounded-lg my-2 mx-auto justify-center hover:bg-red-500">Submit Ticket</button>
            </div>
        </div>
    );
}

export default DraftPolicy;
