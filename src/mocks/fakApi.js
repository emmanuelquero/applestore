const products = [
    {estado: 'Nuevos',id:'01', name: 'Iphone13 pro', description: "valor 350.000$",img:'/imgs/iphone13.jpeg', stock: 2},
    {estado: 'Nuevos',id:'02', name: 'Iphone11 pro', description: "valor 220.000$" ,img:'/imgs/iphone11.jpg', stock:3},
    {estado: 'Usados',id:'03', name: 'IphoneSE', description: "valor 150.000$",img:'/imgs/iphoneSe.jpg' ,stock: 4},
    {estado: 'Nuevos',id:'04', name: 'Iphone12', description: "valor 250.000$",img:'/imgs/iphone12.jfif'  ,stock: 1},
    {estado: 'Usados',id:'05', name: 'IphoneXR', description: "valor 110.000$",img:'/imgs/iphonexr.jfif'  ,stock: 2},
    {estado: 'Usados',id:'06', name: 'Iphone8', description: "valor 100.000$",img:'/imgs/iphone8.jpg'  ,stock: 1},
    {estado: 'Usados',id:'07', name: 'Iphone8Plus', description: "valor 135.000$",img:'/imgs/iphone8plus.jfif'  ,stock: 4}
] 

export const getProducts = (categoryId) => {
    return new Promise ((resolve, reject)=>{
    const productsFiltrados = products.filter(
        (prod) => prod.estado === categoryId
    );
    setTimeout(()=> {
        categoryId ? resolve (productsFiltrados) : resolve (products)
    }, 3000)
});
};

export const getOneProduct = (id) => {
    return new Promise ((resolve, reject)=> {
        const productoEncontrado = products.find (prod => prod.id=== id)
        setTimeout(()=> {
            resolve (productoEncontrado);
        },3000)
    })
}