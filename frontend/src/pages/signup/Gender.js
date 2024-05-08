import React from 'react';

function Gender({onCheckboxChange,selectedGender}) {
    return (
        <div className={'w-full flex items-center justify-start'}>
            <label className={'label'}>
                <span className={'text-gray-500 mr-2'}>Male</span>
                <input
                     type={'checkbox'}
                     className="checkbox border-gray-500"
                     checked={selectedGender==='male'}
                     onChange={()=>onCheckboxChange('male')}
                />
            </label>
            <label className={'label'}>
                <span className={'text-gray-500 mr-2'}>Female</span>
                <input
                    type={'checkbox'}
                    className="checkbox border-gray-500"
                    checked={selectedGender==='female'}
                    onChange={()=>onCheckboxChange('female')}
                />
            </label>
        </div>
    );
}

export default Gender;