
import './App.css'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {



  return (
    <>
      <h1>Hello world</h1>
      {/* <SimpleForm></SimpleForm> 
    */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      <ReusableForm formTitle={"Sing Up"}></ReusableForm>
      <ReusableForm formTitle={"Profile Update"} submitBtn='Update'></ReusableForm>
    </>
  )
}

export default App
