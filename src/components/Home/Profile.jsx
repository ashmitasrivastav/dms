import React from 'react';
import ProfileImage from '../Menu/ProfileImage';

function Profile() {
    return (
        <div className='flex flex-row w-full my-1 shadow-sm bg-gray-700 p-1 rounded-xl'>
            <ProfileImage
                image='image/107291.JPG' 
                divClassName='p-0.5 max-w-24 max-h-24 w-24 h-24 rounded-full overflow-hidden flex items-center justify-center border border-black mr-auto'
                imageClassName='w-full h-full object-cover rounded-full'
            />
            <div className='flex flex-col w-1/4 mr-auto'>
                <h1 className='text-red-500 text-lg font-bold'>107291 | Shubhranshu Das</h1>
                <h2 className='text-white text-sm text-wrap'>Group Manager Human Resources</h2>
                <h2 className='text-white text-sm text-wrap'>Email: shubhranshu.das@coforge.com</h2>
                <h2 className='text-white text-sm text-wrap'>Phone: 91 81783 68683</h2>
                <h2 className='text-white text-sm text-wrap'>Personal Email: shubhranshu.das@outlook.com</h2>
            </div>
            <div className='flex flex-col w-1/4 mr-auto mx-auto justify-between'>
                <h2 className='text-white text-sm'>Employment Status: <span className='text-green-500'>Active</span></h2>
                <h2 className='text-white text-sm'>Company: Coforge Ltd</h2>
                <h2 className='text-white text-sm'>Company Code: N001</h2>
                <h2 className='text-white text-sm'>Location: Greater Noida</h2>
                <h2 className='text-white text-sm'>Department: Human Resources</h2>
            </div>
            <div className='flex flex-col w-1/4 mr-auto mx-auto justify-between'>
                <h2 className='text-white text-sm'>M1: Coforge Ltd</h2>
                <h2 className='text-white text-sm'>M2 Code: N001</h2>
                <h2 className='text-white text-sm'>M3: Greater Noida</h2>
                <h2 className='text-white text-sm'>M4: Human Resources</h2>
                <h2 className='text-white text-sm'>M5: Human Resources</h2>
            </div>
        </div>
    );
}

export default Profile;
