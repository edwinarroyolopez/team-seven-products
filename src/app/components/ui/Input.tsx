import React from 'react';
export interface InputProps {
    type: string;
    id: string;
    placeholder: string;      
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string; 
}

const Input: React.FC<InputProps> = ({ type, id,placeholder, onChange,className }) => {
  return (
    <input id={id} type={type} className={className} placeholder={placeholder} onChange={onChange}/>
  );
};

export default Input;