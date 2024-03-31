import { auth } from './SignIn'

function Protected(){
  return (
    <>
      {auth ? 
        <>
          <header className=" p-5 text-4xl">
          Protected
          </header>
          <div className="p-5">
            You are currently at the protected page
          </div>
        </>
         :
         <p>'You do no have access to this page'</p>
      }
    </>
      
  )
}

export default Protected