
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