import  { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { authSelector } from '../Store/Selectors/authSelector'
import { LoginModalSelector } from '../Store/Selectors/LoginModalSelector';

const Notifications = () => {
    const authState = useRecoilValue(authSelector);
    const setLoginModal = useSetRecoilState(LoginModalSelector);

    useEffect(() => {

    },[])

  return (
    <div>
      hello
    </div>
  )
}

export default Notifications
