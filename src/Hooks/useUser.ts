// import axios from 'axios'
// import { useSetRecoilState } from 'recoil';
// import {allUsersSelector} from '../Store/Selectors/EditModalSelector'

// export const useUsers = async() => {
     
//       const setAllUsers = useSetRecoilState(allUsersSelector)
//       const {data} = await axios.get("https://server-sigma-one.vercel.app/api/v1/user/get-10");
    
//       if(data.ok) {
//         setAllUsers({users : data.users});
//         return data.users;
//       }        
// }