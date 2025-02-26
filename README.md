# 📋 Custom Form with React Hook Form & Zod

¡Bienvenido! 🚀 Este repositorio contiene un formulario personalizado construido con **React Hook Form** y **Zod** para la validación. Es un proyecto simple pero poderoso que demuestra cómo gestionar formularios en React de manera eficiente.

## 📌 Tecnologías Utilizadas

- ⚛️ **React** - Biblioteca para la construcción de interfaces de usuario
- 🪝 **React Hook Form** - Manejo eficiente de formularios en React
- ✅ **Zod** - Librería para la validación de esquemas
- 🎨 **CSS** - Estilización del formulario

## 📂 Estructura del Proyecto

```
📦 src
 ┣ 📂 components
 ┃ ┣ 📂 CustomForm
 ┃ ┃ ┣ 📜 CustomForm.tsx
 ┃ ┃ ┣ 📜 CustomForm.css
 ┃ ┣ 📜 CustomInput.tsx
 ┃ ┣ 📜 CustomInput.css
 ┣ 📂 models
 ┃ ┣ 📜 schema.ts
 ┣ 📜 App.tsx
 ┣ 📜 App.css
```

## 🚀 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1️⃣ Clona este repositorio:
```bash
 git clone https://github.com/tu-usuario/custom-form.git
```

2️⃣ Ingresa al directorio del proyecto:
```bash
 cd custom-form
```

3️⃣ Instala las dependencias:
```bash
 npm install
```

4️⃣ Inicia la aplicación:
```bash
 npm run dev
```

## 🛠️ Funcionamiento del Formulario

🔹 Se usa `useForm` de **React Hook Form** para manejar el estado del formulario.
🔹 `Zod` se encarga de la validación de los datos ingresados.
🔹 Los campos incluyen **name, email, password y confirmPassword**.
🔹 Se muestran mensajes de error cuando los datos ingresados no cumplen con las reglas.

### 📜 Código Destacado

#### 📌 Definición del Schema con Zod
```typescript
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
```

#### 📌 Formulario con React Hook Form
```typescript
const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema)
});
```

## 🎨 Capturas de Pantalla
### 👁️ Como se ve el formulario (estilos sencillos)
![image](https://github.com/user-attachments/assets/46adb568-8dca-48c3-8030-7fc8360c6c7c)


## 📌 Contribuciones

Si deseas mejorar este proyecto, ¡las contribuciones son bienvenidas! 🛠️ Puedes hacer un **fork**, crear una nueva rama y enviar un **pull request**.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. 📜

---
_Hecho con ❤️ y código limpio._

