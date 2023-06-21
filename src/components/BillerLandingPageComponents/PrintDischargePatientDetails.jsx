import React, {useState, useEffect, useRef} from 'react';
import {useReactToPrint} from 'react-to-print'
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';



import logo1 from '../../assets/logo1.jpg'


const initialState = {
    patient_number: "",
      first_name: "",
      last_name:"",
      age: "",
      sex: "",
      address: "",
      city: "",
      phone_number: "",
      entry_date: "",
      doctor_number: "",
      diagnosis:"",
      department_code: "",
      treatment_given: "",
      treatment_advice:"",
      payment_made: "",
      mode_of_payment: "",
      date_admitted: "",
      date_discharge: "",
      numdays: ""
};


const PrintDischargePatientDetails = () => {

const [state, setState] = useState(initialState);

const {first_name, last_name, age, sex	, address, city	, 
    phone_number	, entry_date	, doctor_number	, diagnosis	,department_code,
    treatment_given, treatment_advice, payment_made, mode_of_payment, date_discharge, date_admitted, numdays
} =  state;

const history = useNavigate();

const {patient_number} = useParams();

useEffect(() => {
    axios.get(`http://localhost:5002/api/get/billerviewonedischargedpatient/${patient_number}`).then((resp) => setState({...resp.data[0]}))
}, [patient_number])


const handleSubmit = (e) => {
    e.preventDefault();
    if(!patient_number || !first_name || !last_name || !age || !sex	 || !address	 || !city	 || !phone_number	 || !entry_date	 || !doctor_number	 || !diagnosis	 || !department_code ||
                    !treatment_given || !treatment_advice || !payment_made || !mode_of_payment || !date_admitted	 || !date_discharge){
    
        toast.error("Fill out all the necessary information!");
    }else {
            axios.post("http://localhost:5002/api/post/discharge", {
            patient_number, 
            first_name, 
            last_name, 
            age, 
            sex	, 
            address	, 
            city	, 
            phone_number	, 
            entry_date	, 
            doctor_number	, 
            diagnosis	,
            department_code,
            treatment_given, 
            treatment_advice, 
            payment_made, 
            mode_of_payment, 
            date_admitted,
            date_discharge

        }).then(() => {
            setState({

                patient_number: "", 
                first_name: "", 
                last_name: "", 
                age: "", 
                sex	: "", 
                address	: "", 
                city	: "", 
                phone_number	: "", 
                entry_date	: "", 
                doctor_number: "", 
                diagnosis: "",
                department_code: "",
                treatment_given: "",
                treatment_advice:"",
                payment_made: "",
                mode_of_payment: "",
                date_admitted: "",
                date_discharge: "" });

        }).catch((err) => toast.error(err.response.data));
        toast.success("Data Saved Successfully to the Discharge Patient Table!");
        
        setTimeout(() =>  history.push("/"), 500);
    }
};

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
};  



const componentRef = useRef();
const handlePrint = useReactToPrint({

    content: () => componentRef.current,
    documentTitle: 'Patients Medical Bill',
    onAfterPrint: () => alert('Printed Successfully!!')

});



  return (

    <>

    <div className='flex  mt-3'>
       
        <div className=''>
            <Link to="/displaydischargepatients">
                <input className='mx-3 px-10 py-1 rounded-full bg-red-500 text-white font-semibold hover:bg-red-400' type="button" value="Go Back" />
            </Link>
        </div>

        <button onClick={handlePrint} className='mx-3 px-10 py-1 rounded-full bg-green-500 text-white font-semibold hover:bg-green-400'>Print</button>

    </div>

    <div ref={componentRef} className='m-10 border-[1px] border-greenColor p-7 ' style={{width: '90%', height: window.innerHeight}}>
       
        

        <div className='flex justify-center items-center gap-6'>

            <a class="flex-shrink-0" href="#">
                <img className='w-[130px] h-[120px]' src={logo1} alt="logo"/>
            </a>

            <div className='text-center'>
                <h3 className='text-[13px] font-bold text-slate-700'>HOSPITAL MANAGEMENT SYSTEM</h3>
                <h5 className='text-[10px] font-semibold text-slate-7 '>University of Science and Technology of Southern Philippines</h5>
                <h5 className='text-[10px]  text-slate-700 '>Lapasan, Cagayan de Oro City, 9000, Philippines</h5>
                <h5 className='text-[10px] text-slate-700 '>Tel., MTI # 855-5099/740783 ; E-Mail Add: hms.ustp.hosp@yahoo.com</h5>
            </div>

        </div>

        <div className=' justify-start items-center gap-6 mt-5 '>

            <div className='flex justify-start items-center  mx-5'>
                <label className='text-[13px]'>Patient : {[patient_number, "  -  ", last_name,",  ", first_name, "  -  ", sex]} </label>
            </div>   




            <div className='flex justify-between text-left ms-5'>

                <div className='grid grid-flow-row'>

                    <label className='text-[10px]'>Company : </label>
                    <label className='text-[10px]'>Insurance : </label>
                    <label className='text-[10px]'>Address : {[address, "  , ", city]}</label>
                    <label className='text-[10px]'>Tel. No. : {phone_number}</label>
                    <label className='text-[10px]'>First Case Rate : {diagnosis}</label>
                    <label className='text-[10px]'>Second Case Rate :</label>

                </div>
                
                <div className='grid grid-flow-row'>
                    <label className='text-[10px]'>Admission # :</label>
                    <label className='text-[10px]'>Medicare Type :</label>
                    <label className='text-[10px]'>Date Admitted : {date_admitted}</label>
                    <label className='text-[10px] '>Date Discharged : {date_discharge}</label>
                    <label className='text-[10px]'>No. of Days : {numdays}</label>

                </div>

                </div>
                </div>

        
    </div>
    </>
  )
}

// addEdit

export default PrintDischargePatientDetails