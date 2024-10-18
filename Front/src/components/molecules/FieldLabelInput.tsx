import React from 'react';
import Label from '../atoms/label/index';
import InputText from '../atoms/input/InputText';

type LabeledInputProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FieldLabelInput = ({ label, value, placeholder, onChange  }: LabeledInputProps) => {
  return (
    <div className='FieldLabelInput'>
      <Label text={label}></Label><br></br>
      <InputText value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default FieldLabelInput;