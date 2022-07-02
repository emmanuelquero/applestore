

const products = [
    {id:'01', name: 'Iphone13 pro', description: "valor 350.000$",img:'/imgs/iphone13.jpeg', stock: 2},
    {id:'02', name: 'Iphone11 pro', description: "valor 220.000$" ,img:'/imgs/iphone11.jpg', stock:3},
    {id:'03', name: 'IphoneSE', description: "valor 150.000$",img:'/imgs/iphoneSe.jpg' ,stock: 4},
    {id:'04', name: 'Iphone12', description: "valor 250.000$",img:'/imgs/iphone12.jfif'  ,stock: 1},
] 
const product = {
    id:'04', name: 'Iphone12', description: "valor 250.000$",img:'/imgs/iphone12.jfif'  ,stock: 1,

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

