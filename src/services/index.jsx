import axiosInstance from './AxiosInstance'

export async function getMarques(){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/marques");
}

export async function getCategories(){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/categories");
}

export async function getCarburants(){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/carburants");
}

export async function getTransmissions(){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/transmissions");
}

export async function getModeles(modele){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/modeles/marques/" + modele);
}

export async function login(formData){
    return axiosInstance.post("https://rest-production-c243.up.railway.app/auth/login", formData);
}

export async function getAnnonces(){
    let token = localStorage.getItem("auth");
    if(token == null){
        return axiosInstance.get("https://rest-production-c243.up.railway.app/annonces");
    }else{
        return axiosInstance.get("https://rest-production-c243.up.railway.app/annonces",{
            headers: {"Authorization" : `Bearer ${token}`}
        });

    }
}

    export async function addFavoris(id){
        let token = localStorage.getItem("auth");
        return axiosInstance.post("https://rest-production-c243.up.railway.app/annonces/"+id+"/favoris",null,{
            headers: {"Authorization" : `Bearer ${token}`}
        });
    }

export async function removeFavoris(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("https://rest-production-c243.up.railway.app/annonces/"+id+"/favoris",{
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function favoris(){
    let token = localStorage.getItem("auth");
    return axiosInstance.get("https://rest-production-c243.up.railway.app/annonces/favoris",{
        headers: {"Authorization" : `Bearer ${token}`}
    });
}


    export async function fiche(id){
        return axiosInstance.get("https://rest-production-c243.up.railway.app/annonces/" + id);
    }


export async function searchs(s){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/annonces/search?i=" + s);
}

export async function filtrer(s){
    let data = JSON.stringify(s);
    return axiosInstance.post("https://rest-production-c243.up.railway.app/annonces/filtrer", data,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        );
}

export async function chats(){
    let token = localStorage.getItem("auth");
    return axiosInstance.get("https://rest-production-c243.up.railway.app/chats",{
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function mess(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.get("https://rest-production-c243.up.railway.app/messages/chats/" + id,{
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    });
}

export async function send(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("https://rest-production-c243.up.railway.app/messages", data, {
        headers: {"Authorization" : `Bearer ${token}`,
            'Content-Type': 'application/json'}
    });
}