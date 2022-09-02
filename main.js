const loadApi = async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data
}
const reload = async()=>{
    const data = await loadApi();
    for(input of data){
        console.log(input.category);
    }

}
reload()