import React from 'react';
import { Form } from 'react-bootstrap/';
import { Col , Button} from 'react-bootstrap/';

export default function Account({ handleTextChange, handleNumberChange }) {
    return (
        <div className='p-2'>
            <div className="container">
                <div className="border border-dark">
                    <h4 className="text-center m-3">Personal Information</h4>
                    {/* Name */}
                    <Form.Group className="m-3 userFullName" >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            id="name"
                            placeholder="Enter Your Full Name"
                            onChange={handleTextChange}
                        // required
                        />
                    </Form.Group>

                    {/* Age */}
                    <Form.Group className="m-3 userAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            id="age"
                            type="number"
                            placeholder="Enter age"
                            onChange={handleNumberChange}
                        // required
                        />
                    </Form.Group>

                    {/* Sex */}
                    <div className="m-3 sex-div-outter" onChange={handleTextChange}>
                        <Form.Label>Sex</Form.Label>
                        <div className="p-3 sex-div-inner border">
                            <Form.Check
                                label='Male'
                                name='sex'
                                type="radio"
                                id="sex"
                                value="male"
                            />
                            <Form.Check
                                label='Female'
                                name='sex'
                                type="radio"
                                id="sex"
                                value="female"
                            />
                            <Form.Check
                                label='Prefer Not to Say'
                                name='sex'
                                type="radio"
                                id="sex"
                                value="null"
                            />
                        </div>
                    </div>

                    {/* Income */}
                    {/* <Form.Group className="m-3 userIncome">
                        <Form.Label>Annual Income</Form.Label>
                        <Form.Control
                            id="income"
                            type="number"
                            placeholder="Enter Your Net Income"
                            onChange={handleNumberChange}
                        // required
                        />
                    </Form.Group> */}

                    <Form.Group as={Col} controlId="state">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="state"
                                    // onChange={handleAddressTextChange}
                                // required
                                >
                                    <option value="">Select State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </Form.Control>
                            </Form.Group>
                            <br></br>
                            {/* <Button type="submit" class="btn btn-" to="/">Submit</Button> */}
                            <a href="/"><Button>Home</Button></a>
                </div>
            </div>
        </div>

    )
}