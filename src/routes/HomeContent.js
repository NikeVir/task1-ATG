import React from 'react'
import { Dropdown,DropdownButton, Button, Form, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import Post from '../components/Post'

const Userarray = [
    {
        userid: "Sarthak Kamra",
        userpic: "/images/Rectangle 3.png",
        views: "1.4k",
        type: "✍️ Article",
        image: "/images/Rectangle5.png",
        title: "What if famous brands had regular fonts? Meet RegulaBrands!",
        para: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
    },
    {
        userid: "️ Sarah West",
        userpic: "/images/Rectangle 4.png",
        views: "1.4k",
        type: "🔬️ Education",
        image: "/images/Rectangle 6.png",
        title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        para: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
    },
    {
        userid: "Ronal Jones",
        userpic: "/images/Rectangle 32.png",
        views: "1.4k",
        type: "🗓️ Meetup",
        image: "/images/Rectangle 6.png",
        title: "Finance & Investment Elite Social Mixer @Lujiazui",
        para: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
    }
]
export default function HomeContent() {

    return (
        <div>
            <section className='HomeContent'>
                <div className='main_div'>
                    <div className='HomeContentNav'>
                        <div className="tab">
                            <button className="tablinks" >All Post</button>
                            <button className="tablinks navBlock" >Article</button>
                            <button className="tablinks navBlock" >Events</button>
                            <button className="tablinks navBlock" >Education</button>
                            <button className="tablinks navBlock" >Job</button>
                        </div>
                        <DropdownButton id="dropdown-basic-button" className='filterdown' title="Filter:All">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <div className='HomeContentButton'>
                            <Button style={{
                                background: "#EDEEF0",
                                color: "black",
                                border: "none",
                                fontWeight: "bold"
                            }}>Write a post</Button>

                            <Button>+ Join Group</Button>
                        </div>


                    </div>
                    <div className='PostandDetail'>
                        <div className='PostSection'>
                            <Post detail={Userarray[0]} />
                            <Post detail={Userarray[1]} />
                            <Post detail={Userarray[2]} />
                        </div>
                        <div className='DetailSection'>
                            <Form className="d-flex" >
                                <Button variant="outline-success"><FontAwesomeIcon icon={faLocationDot} /></Button>
                                <FormControl
                                    type="search"
                                    placeholder="Enter your Location"
                                    className="me-2"
                                    aria-label="Search"
                                />

                            </Form>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
