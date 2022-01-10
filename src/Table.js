import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function Table() {

    const [user, setuser] = useState([])
    useEffect(async () => {
        load()

    }, [])
    async function load() {
        try {
            var data = await fetch("https://61d47ecd8df81200178a8d0c.mockapi.io/form");
            var jdata = await data.json();
            setuser(jdata)
            console.log(jdata);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Address</th>
                        <th scope="col">Pincode</th>

                        <th scope="col">State</th>
                        <th scope="col">Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((obj) => {
                            return <tr>
                                <td>{obj.FirstName}</td>
                                <td>{obj.LastName}</td>
                                <td>{obj.Address}</td>
                                <td>{obj.Pincode}</td>
                                <td>{obj.State}</td>
                                <td>{obj.Country}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Table
