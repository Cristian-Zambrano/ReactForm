//como son las propiedades del formulario
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputForm from './components/CustomInput';
import './CustomForm.css';
import { FormValues, schema } from './models';
//zod es una libreria para realizar validaciones de formularios. Se utiliza tanto en el front como en el back

const CustomForm = () => {
    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema)
    });
    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log(data); //esto ya seria cosa del backend
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm name='name' control={control} label='Name' type="text" error={errors.name}/>
            <InputForm name='email' control={control} label='Email' error={errors.email}/>
            <InputForm name='password' control={control} label='Password' type='password' error={errors.password}/>
            <InputForm name='confirmPassword' control={control} label='Confirm Password' type='password' error={errors.confirmPassword}/>
            <button type='submit' className='btn'>Submit</button>
        </form>
    )
}

export default CustomForm;