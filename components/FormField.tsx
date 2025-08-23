import React from "react";
import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Controller,FieldValues,Path,Control } from "react-hook-form";

interface FormFieldProps<T extends FieldValues>{
     control:Control<T>;
     name:Path<T>;
     label:string;
     placeholder?:string;
     type?:'text'|'email'|'password'|'file'
}

const FormField = ({ control,name,label,placeholder,type="text" }: FormFieldProps<T>) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <FormItem>
                <FormLabel className="label">{label}</FormLabel>
                <FormControl>
                    <Input className="input"
                           placeholder={placeholder}
                           type={type}
                           {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

export default FormField;
