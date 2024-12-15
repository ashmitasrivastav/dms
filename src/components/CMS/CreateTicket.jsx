import React from 'react';
import RTE from '../RTE/RTE';
import { useForm } from 'react-hook-form';
import MultiLineInput from '../Fields/MultiLineInput';
import SelectInput from '../Fields/SelectInput';
import FileUpload from '../Fields/FileUpload';

function CreateTicket() {
    const options1 = ["Select Category", "Option 1", "Option 2", "Option 3", "Option 4"];
    const options2 = ["Select Sub category", "Option 1", "Option 2", "Option 3", "Option 4"];

    return (
        <div className="mx-6 mt-1 p-10 rounded-lg">
            <div className="grid grid-cols-3 gap-4">
                <input className="bg-transparent border-solid w-full p-2 border border-gray-300 rounded" type="text" placeholder="Requested for" required/>
                <SelectInput label="Category" options={options1}/>
                <SelectInput options={options2}/>

                <div className="mx-2">
                    <label htmlFor="email">First Name:</label>
                    <input type="email" id="email" name="email" value="John"/>
                </div>
                <div className="mx-2">
                    <label htmlFor="email">Last Name:</label>
                    <input type="email" id="email" name="email" value="Doe"/>
                </div>
                <div className="mx-2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value="john.doe@example.com"/>
                </div>
            </div>

            <MultiLineInput className="bg-transparent" />

            <div className="flex flex-row gap-4 m-auto">
                <FileUpload />
                <button className="w-full max-h-10 mt-4 bg-blue-400 text-white p-2 rounded-lg mx-auto justify-center hover:bg-red-500">Submit Ticket</button>
            </div>
        </div>
    );
}

export default CreateTicket;
