import react from "react";
import axios from "axios";
import { useFormik } from "formik";

function FormData() {
    const formik = useFormik({
        initialValues: {
            FirstName: "",
            LastName: "",
            Address: "",
            Pincode: "",
            State: "",
            Country: "",
        },
        onSubmit: async values => {
            await axios.post("https://61d47ecd8df81200178a8d0c.mockapi.io/form", values)
        }
    })
    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label for="FirstName"  >FirstName:</label>
                    </div>
                    <div className='col-lg-6'>
                        <input type="text" onChange={formik.handleChange} value={formik.values.FirstName} name="FirstName" />
                    </div>
                    <div className='col-lg-6 mt-2'>
                        <label for="LastName"  >LastName:</label>
                    </div>
                    <div className='col-lg-6 mt-2'>
                        <input type="text" onChange={formik.handleChange} value={formik.values.LastName} name="LastName" />
                    </div>
                    <div className='col-lg-6 mt-2'>
                        <label for="Address"  >Address:</label></div>
                    <div className='col-lg-6 mt-2'>
                        <input type="text" onChange={formik.handleChange} value={formik.values.Address} name="Address" />
                    </div>
                    <div className='col-lg-6 mt-2'>
                        <label for="Pincode"  >Pincode:</label></div>
                    <div className='col-lg-6 mt-2'>
                        <input type="text" onChange={formik.handleChange} value={formik.values.Pincode} name="Pincode" />
                    </div>


                </div>
                <div className='row mt-2'>
                    <div className='col-lg-6'>
                        <label for="exampleInputEmail1"  >State:</label></div>
                    <div className='col-lg-6'>
                        <input type="text" onChange={formik.handleChange} value={formik.values.State} name="State" />
                    </div>
                    <div className='col-lg-6 mt-2'>
                        <label for="exampleInputEmail1"  >Country:</label></div>
                    <div className='col-lg-6 mt-2'>
                        <input type="text" onChange={formik.handleChange} value={formik.values.Country} name="Country" />
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-lg-4 mt-2'>
                        <input type="submit" />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default FormData
