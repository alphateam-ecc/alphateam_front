import { useState,useEffect,useCallback } from "react";
import axios,{AxiosResponse} from "axios";


//axiosErrorのための型定義
type AxiosError ={
    responce?:{
        data:string,
        status:number,
        statusText:string
    }
    request?:unknown,
    message:string,
}
//API呼び出しカスタムフック
//Tは取得するデータ型
//Dはリクエストするデータ型
const useAPI = <T,D =any >(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    requestData?: D,
) =>{
    //データ
    const [data,setData] = useState<T | null>(null);
    const [error,setError] = useState<string | null>(null);
    const [loading,setLoading] = useState<boolean | null>(null);

    //APIを呼び出す関数
    const fetchData = useCallback(async (requestData? :D) =>{
        try{
            const responce:AxiosResponse<T> = await axios({
                url,
                method,
                data:requestData,
            });
            setData(responce.data as unknown as T);
            return responce.data;
        }catch(e:unknown){
            setError("APIエラー");
        }finally{
            setLoading(false);
        }
    },[url,method])

    useEffect(() => {
        fetchData();
    },[fetchData]);

    //フック戻り値
    return{data,error,loading,fetchData};
}


export default useAPI;