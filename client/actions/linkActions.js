import { GENERATE_LINK_TOKEN , GENERATE_LINK_TRANSACTIONS} from './types';
import axios from 'axios';

export const generateLinkTransactions = (public_token, uid, callback) => dispatch => {
    axios.post('http://192.168.86.119:3001/get_access_token',{public_token, uid})
         .then(res => {
                if (res.status === 200){
                    dispatch({
                            type: GENERATE_LINK_TRANSACTIONS,
                            payload: {transactions: res.data.transactions}
                        })

                    if (callback) {
                        callback(uid);
                    }
                }
    });
}
