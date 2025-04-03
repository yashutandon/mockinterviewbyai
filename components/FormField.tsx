import React from 'react'
import { Control, Controller, Field, FieldValue, FieldValues, Path } from 'react-hook-form'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';

interface FormFieldProps< T extends FieldValues>{
    control:Control<T>;
    name:Path<T>;
    label:string;
    placeholder?:string;
    type?:'text' | 'email' | 'password' | 'file'


}

const FormField = ({control,name,label,placeholder,type='type'}: FormFieldProps<T>
) =>(
    <Controller name={name} control={control} render={({ field }) => (       
    <FormItem>
        <FormLabel className='label'>{label}</FormLabel>
        <FormControl>
          <Input className='input' placeholder={placeholder} {...field} type={type} />
        </FormControl>
      
        <FormMessage />
      </FormItem>
      )}
  />);

export default FormField