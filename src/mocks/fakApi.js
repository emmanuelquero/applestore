

const products = [
    {id:'01', name: 'Iphone13 pro', description: "valor 350.000$",img:'/imgs/iphone13.jpeg', stock: 2},
    {id:'02', name: 'Iphone11 pro', description: "valor 220.000$" ,img:'/imgs/iphone11.jpg', stock:3},
    {id:'03', name: 'IphoneSE', description: "valor 150.000$",img:'/imgs/iphoneSe.jpg' ,stock: 4},
    {id:'04', name: 'Iphone12', description: "valor 250.000$",img:'/imgs/iphone12.jfif'  ,stock: 1},
] 
const product = {
    id:'04', name: 'Apple iPhone12 128 gb', description: "Descripción: El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas . Un frente de Ceramic Shield, cuatro veces más resistente a las caídas. Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic. Además, es compatible con los nuevos accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida . Que comience la diversión.",img:'/imgs/detalle.jfif'  ,stock: 1

}

export const getData = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout (()=>{
        if(condition){
            resolve(products)
        }else{
            reject('salio mal')
        }
},3000)                   
})  

export const getInfo = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            resolve (product)
        },2000)
    })
}

