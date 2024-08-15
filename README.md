
# Create next app
```npx create-next-app@latest my-nextjs-app```
# run project
```npm run dev```

# join witt git
```git remote add origin https://github.com/edwinarroyolopez/team-seven-products.git```

1. components
    Input
    Button
2. Definir Producto
    Product -> 
        id: string;
        name: string;
        descripcion: string;
        price: number;
        image: string;

3. Crear dos paginas
    form -> 
        <Input type="text" id="name" placeholder="Ingrese el nombre"/>
        <Input type="text" id="description" placeholder="Ingrese la descripcion"/>
        <Input type="text" id="price" placeholder="Ingrese el precio"/>
        <Button label="Save" onClick=""/>
        - Criterios de aceptación
            - Cuando se de click en el boton save:
                - Debería verificar que los Inputs contengan un valor o no estén vacíos
                - la información debería almacenarce en localStorage

    list -> 
        table -> 
            - mostrar todos los productos

-> home
        -> createProduct -> form
        -> listProducts -> tabla



        ```tsx
        'use client'
import { useState } from "react"
import styles from "./page.module.css";
import Button from "./components/Button";
import InputText from "./components/Input";
import { HumanProps } from "./types/generalsType"; 

export default function Home() {

  const initialHuman: HumanProps = {
    name:'',
    email: '',
    phone: ''
  }

  const [human, setHuman] = useState(initialHuman)

  function handledAccept() {
    console.log({ human })
    console.log('Clicked')
  }

  function handledChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log({target:e.target.id})
    
    const value = e.target.value;
    const id = e.target.id
    setHuman({...human, [id]:value })

  }

  return (
    <main className={styles.main}>
      <div>Hi mars!</div>
      <div className="content">
        <InputText placeholder="Put your name" onChange={handledChange} type={"text"} id={"name"}/>
        <InputText placeholder="Put your email" onChange={handledChange} type={"email"} id={"email"} />
        <InputText placeholder="Put your phone" onChange={handledChange} type={"text"} id={"phone"}/>
      </div>

      <Button label={"aceptar"} onClick={handledAccept} />
    </main>
  );
}
```