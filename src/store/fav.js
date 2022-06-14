import axios from 'axios';
export default {
    actions: {
        async addProduct({commit}) {
            const res = await axios.get(`http://localhost:3001/catalog`);
            const newProduct = res.data;
            commit('setState', newProduct );
        }

    },
    mutations: {
        setState(state, newProduct ) {            
            state.cart=(newProduct);
        }        
    },
    state: {
        cart: [],
    },
    getters: {
        addedProducts(state) {
            return state.cart;
        }
    }
};
