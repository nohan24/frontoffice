import axiosInstance from './AxiosInstance'

export async function getMarques(){
    return axiosInstance.get("https://rest-production-e2d3.up.railway.app/marques");
}

export async function getCategories(){
    return axiosInstance.get("https://rest-production-e2d3.up.railway.app/categories");
}

export async function getCarburants(){
    return axiosInstance.get("https://rest-production-e2d3.up.railway.app/carburants");
}

export async function getTransmissions(){
    return axiosInstance.get("https://rest-production-e2d3.up.railway.app/transmissions");
}

export async function getModeles(){
    return axiosInstance.get("https://rest-production-e2d3.up.railway.app/modeles");
}

export async function login(formData){
    return axiosInstance.post("https://rest-production-e2d3.up.railway.app/auth/login", formData);
}

