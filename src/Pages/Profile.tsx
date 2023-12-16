import { useParams } from "react-router-dom"
import {useEffect , useState} from 'react'
import axios from 'axios'
import {ClipLoader} from 'react-spinners'
import Header from "../Components/UI/Header/Header"
import UserHeader from "../Components/UI/profile/UserHeader"
import UserBio from "../Components/UI/profile/UserBio"
import UserPostFeed from "../Components/UI/Post/UserPostFeed"


const Profile = () => {
    const {userId , name} = useParams();
    const [isLoading , setisLoading] = useState(true);
    const [user , setUser] = useState<any>();
    const [followers , setFollowers] = useState("0");

    useEffect(() => {
        const fetchData = async() => {
            const {data} = await axios.get(`https://server-sigma-one.vercel.app/api/v1/user/${userId}/single-user`);
            setUser({...data.user});
            setFollowers(data.followers);
            setisLoading(false);
          }         
          fetchData();
          console.log(user);
    },[userId,followers])

    if(isLoading) {
        return (
          <div className='flex justify-center items-center mt-80'>
             <ClipLoader color='lightblue' size={80}/>
          </div>
        )
    }

    return (
            <div>
              <Header showBackArrow label={user.name} />
              <UserHeader name={user.name} userId={user.id} coverImage={user.coverImage} profileImage={user.profileImage} />
              <UserBio name={user.name} bio={user.bio} username={user.username} userId={userId} followersCount={followers} following={user?.followingIds?.length} />
              <UserPostFeed userId={userId}/>
            </div>
          )
    }


export default Profile
