import { useCallback, useState } from "react";
import { LoginModalSelector } from "../../Store/Selectors/LoginModalSelector"
import Modal from "../UI/modal/Modal"
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Input from "../UI/Input/Input";
import { RegisterModalSelector } from "../../Store/Selectors/RegisterModalSelector";
import axios from 'axios'
import toast from "react-hot-toast";


const RegisterModal = () => {
  const registerModal = useRecoilValue(RegisterModalSelector);
  const setRegisterModal = useSetRecoilState(RegisterModalSelector);
  const setLoginModal = useSetRecoilState(LoginModalSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => {
    setRegisterModal({ isOpen: false });
  }

  const handleSignInButton = () => {
    if(isLoading){
      return;
    }

    setRegisterModal({isOpen : false});
    setLoginModal({isOpen : true});
  }

  const handleSubmit = useCallback(async() => {
    try {
     
       setIsLoading(true);
      // submit the form and login
      const {data} = await axios.post("https://server-sigma-one.vercel.app/api/v1/auth/register" , {
        name , username , email ,password
      })

      setIsLoading(false);
       
      if(data.ok){
        setRegisterModal({isOpen : false});
        toast.success(data.msg);
        setLoginModal({isOpen : true});
      }else{
        toast.error(data.msg)
      }
   
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, registerModal, username, name])

  const bodyContent = (
    <div className="flex flex-col gap-2">

      <Input
        placeholder="Name"
        value={name}
        type="text"
        disabled={isLoading}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        placeholder="E-Mail"
        value={email}
        type="text"
        disabled={isLoading}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        placeholder="Username"
        value={username}
        type="text"
        disabled={isLoading}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Input
        placeholder="Password"
        value={password}
        type="password"
        disabled={isLoading}
        onChange={(e) => setPassword(e.target.value)}
      />

    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center p-4">
      <p> Already have an Account ?&nbsp; 
        <span
        onClick={handleSignInButton}
        className="text-sky-500 hover:underline cursor-pointer"
        >
          Sign In
        </span>
      </p>
    </div>
 )
  return (
    <Modal
      actionLabel="Sign Up"
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Sign Up"
      onClose={handleClose}
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal;
