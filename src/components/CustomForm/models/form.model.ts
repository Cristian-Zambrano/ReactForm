import { z } from "zod";

export const schema = z.object({
    name: z.string().min(3, 'Ingrese un nombre válido'),
    email: z.string().email('Ingrese un email válido').min(3, 'Ingrese un email válido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z.string().min(6, 'La contraseña de confirmacion debe tener al menos 6 caracteres')
}).refine(data => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',    
    path: ['confirmPassword']
});
export type FormValues = z.infer<typeof schema>; //Los valores del schema usado con zod ahora son de tipo FormValues para que funcione con la sintaxis de typescript