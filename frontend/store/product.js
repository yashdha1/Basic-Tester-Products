// create the store for to store the variables
import { create } from "zustand";

// just likee useState but this tate is global
// and thus can be used in any state globally in any react component .....

export const useProductState = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  
  // this is a function that create products and connects frontend to the backend 
  createProduct: async (newProduct) => {
    
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { sucess: false, massege: "Please enter all the fields. " };
    }

    const res = await fetch("/api/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }) ;

    // if responc is not okk catch that shit....
    if (!res.ok) {
        const errorText = await res.text(); // Read error message
        console.error("Server Error:", errorText);
        return { success: false, message: "Server error: " + errorText };
    }

    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true , message : "PRODUCT created successfully !!!" };
  },
  // this function creates all the products created in the Past...
  fetchProduct: async () => {
    const res = await fetch("/api/product/") ; 
    const data = await res.json() ; 

    // console.log("fetched Data: "+ data)

    // if (!data || !data.data) {
    //   console.error("Invalid data format received:", data);
    //   return;
    // }
    set({ products: data.message }) ; // this is working fine for some reason.... 
  },
  deleteProduct: async (pid) => {
    const res = await fetch(`/api/product/${pid}`, {
      method: "DELETE" , 
    }) 
    const data = await res.json() 
    console.log(data.message) ; 
    if(data.success){
      console.log(data.message) ; 
      return { success: false, message:  data.message } 
    }
    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    }));
    return { success: true, message: data.message } 
  },
  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/product/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message }
    set(state => ({
			products: state.products.map(product => (product._id === pid ? data.data : product)),
		}));
		return { success: true, message: data.message };
  }
}));