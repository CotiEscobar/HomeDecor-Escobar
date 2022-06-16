import product from "./product";

const traerProducto = () => { 
    return new Promise ((resolve) => {
    setTimeout(()=>{
        resolve(product);
    }, 1000);
});
}

export default traerProducto;