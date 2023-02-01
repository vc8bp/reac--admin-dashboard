import { req } from "../../axiosReqMethods";
import { editProduct } from "../Products";
import { setError } from "../MessageRedux"


export const editProductapi = async (dispatch, product) => {
    try {
        const res = await req.put(`/api/products/${product._id}`, product);
        dispatch(editProduct(res?.data))
        dispatch(setError(res.data.message))
    } catch (error) {
        dispatch(setError(error.responce.data.message))
        console.log(error)
    }
}
export const addProductapi = async (dispatch, product) => {
    try {
        const res = await req.post(`/api/products`, product);
        dispatch(editProduct(res?.data));      
    } catch (error) {
        console.log(error)
    }
}

