import { useFormik } from "formik";
import react from "react";
import axios from "axios";


export default function Form(){
    const formik = useFormik({
        initialValues:{
            FirstName:"",
            LastName:"",
            Address:"",
            Pincode:"",
            Gender:"",
            food:"",
            State:"",
            Country:"",
        },
        onSubmit: async values=>{
            await axios.post("https://61d47ecd8df81200178a8d0c.mockapi.io/form",values)
        }
    })

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-lg-12">
                    <label for="FirstName"  >FirstName:</label>
                    <input type="text" onChange={formik.handleChange} value={formik.values.FirstName}  name="FirstName"
                         />
                </div>
                <div  className="col-lg-12">
                    <label for="LastName"  >LastName:</label>
                    <input type="text"  onChange={formik.handleChange} value={formik.values.LastName}  name="LastName"  />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <label for="Address"  >Address:</label>
                    <input type="text"   onChange={formik.handleChange} value={formik.values.Address}  name="Address"  />
                </div>

                <div class="mb-3">
                    <label for="Pincode"  >Pincode:</label>
                    <input type="text"   onChange={formik.handleChange} value={formik.values.Pincode} name="Pincode"  />
                </div>
                <div class="mb-3">
                    <label for="Gender"  >Gender:</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Female
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Others
                    </label>
                </div><br/>

                <div class="mb-3">
                    <label for="exampleInputEmail1"  >Choice of food:</label>
                </div>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">option1</option>
                    <option value="2">option2</option>
                    <option value="3">option3</option>
                    <option value="2">option4</option>
                    <option value="3">option5</option>
                </select><br/>
                <div class="mb-3">
                    <label for="exampleInputEmail1"  >State:</label>
                    <input type="text"   onChange={formik.handleChange} value={formik.values.State} name="State" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1"  >Country:</label>
                    <input type="text"    onChange={formik.handleChange} value={formik.values.Country} name="Country"  />
                </div>
                <input type="submit"/>
            </div>
            
        </form> 
        </div>
           
        
    )
}
