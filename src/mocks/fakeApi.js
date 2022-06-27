
    const products = [
        {id: '01', name: 'random1', description:"eeee"},
        {id: '02', name: 'random1', description:"eeee"},
        {id: '03', name: 'random1', description:"eeee"},
        {id: '04', name: 'random1', description:"eeee"},
        {id: '05', name: 'random1', description:"eeee"},
        {id: '06', name: 'random1', description:"eeee"},
        {id: '07', name: 'random1', description:"eeee"},
        {id: '08', name: 'random1', description:"eeee"},
    ]
    export const getData = new Promise ((resolve, reject) =>{
        //acciones
        let condition = true
        setTimeout(()=>{
            if(condition){
                resolve (products)                
            }else {
                reject('salio mal :(')
            }
        },2000)       
    })
