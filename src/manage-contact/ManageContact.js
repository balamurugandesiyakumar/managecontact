import React, { Component } from 'react'
import './managecontact.scss';
import { Link } from "react-router-dom";

export default class ManageContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            toggleNew: false,
            toggleEdit: false
        }
    }

    toggleNewCard = () => {
        this.setState({ toggleNew: true, toggleEdit: false })
    }

    toggleEditCard = () => {
        this.setState({ toggleEdit: true, toggleNew: false })
    }
    toggleMenu = () => {
        this.setState({ toggle: !this.state.toggle })
    }



    render() {
        return (
            <div>
                <div id="wrapper" className={this.state.toggle ? "toggled" : ""}>

                    <aside id="sidebar-wrapper">
                        <div class="sidebar-brand">
                            <i class="fa fa-bars" onClick={this.toggleMenu}></i>
                        </div>
                        <ul class="sidebar-nav">
                            <li class="active">
                                <Link to="/user-list"><i class="fa fa-home"></i>Home</Link>
                            </li>
                            <li>
                                <Link to="/user-list"><i class="fa fa-plug"></i>Plugins</Link>
                            </li>
                            <li>
                                <Link to="/user-list"><i class="fa fa-user"></i>Users</Link>
                            </li>
                        </ul>
                    </aside>

                    <div id="navbar-wrapper">
                        <nav class="navbar navbar-inverse">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <a href="#" class="navbar-brand" id="sidebar-toggle"><i class="fa fa-search"></i></a>
                                </div>
                                <div class="navbar-right">
                                    <ul>
                                        <li>
                                            <i class="fa fa-plus"></i> Add
                                       </li>
                                        <li>
                                            <i class="fa fa-envelope-o"></i>
                                        </li>
                                        <li>
                                            <select className="form-control">
                                                <option value="0"> Mark Henry</option>
                                                <option value="0"> Thomas</option>
                                                <option value="0"> John Mathew</option>
                                            </select>
                                        </li>
                                        <li>
                                            <i class="fa fa-bell-o"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>



                    <section id="content-wrapper">
                        <div class="row">
                            <div class="col-lg-12 contact-section">
                                <div className="contact-title">
                                    <i class="fa fa-address-book" aria-hidden="true"></i>
                                    <div className="">
                                        <h3>Contacts</h3>
                                        <p>Welcome to CRM contact page</p>
                                    </div>
                                </div>
                                <div className="contact-sort">
                                    <label>Sort by :</label>
                                    <select className="form-control">
                                        <option value="0">Date Created</option>
                                        <option value="1">Name</option>
                                        <option value="2">Company</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row contact-search">
                            <div className="col-lg-12 search-col">
                                <div class="form-group ">
                                    <input type="text" class="form-control" id="inputSuccess2" placeholder="Search contacts" />
                                    <span class="fa fa-search form-control-feedback"></span>
                                </div>
                                <button className="ad-contact">
                                    <i class="fa fa-plus"></i> Add Contact
                                </button>
                            </div>
                        </div>


                        <div className="contact-table">
                            <div className="contact-lfttable">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Basic info</td>
                                            <td>Company</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="ctable-name" onClick={this.toggleNewCard}>
                                                    <i className="ctable-icn">MK</i>
                                                    <div className="ctable-namerght">
                                                        <h4>Mike Huston</h4>
                                                        <span>mikehuston@gmail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Amazon Traders
                                        </td>
                                            <td>
                                                <i class="fa fa-pencil" aria-hidden="true" onClick={this.toggleEditCard}></i>
                                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ctable-name">
                                                    <i className="ctable-icn">MK</i>
                                                    <div className="ctable-namerght">
                                                        <h4>Mike Huston</h4>
                                                        <span>mikehuston@gmail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Amazon Traders
                                        </td>
                                            <td>
                                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="ctable-name">
                                                    <i className="ctable-icn">MK</i>
                                                    <div className="ctable-namerght">
                                                        <h4>Mike Huston</h4>
                                                        <span>mikehuston@gmail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Amazon Traders
                                        </td>
                                            <td>
                                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="ctable-name" >
                                                    <i className="ctable-icn">MK</i>
                                                    <div className="ctable-namerght">
                                                        <h4>Mike Huston</h4>
                                                        <span>mikehuston@gmail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Amazon Traders
                                        </td>
                                            <td>
                                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="ctable-name">
                                                    <i className="ctable-icn">MK</i>
                                                    <div className="ctable-namerght">
                                                        <h4>Mike Huston</h4>
                                                        <span>mikehuston@gmail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Amazon Traders
                                        </td>
                                            <td>
                                                <i class="fa fa-pencil" aria-hidden="true" onClick={this.toggleEditcard}></i>
                                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                            {
                                (this.state.toggleNew) ?
                                    <div className="contact-rghttable contact-view">
                                        <div className="contact-table-card">
                                            <div className="ctable-name">
                                                <i className="ctable-icn">NC</i>
                                                <div className="ctable-namerght">
                                                    <h4>Create New Contact</h4>
                                                    <span>Product Manager CRM Management</span>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <label>Full name : </label>
                                                <span>Mike Huston</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Email : </label>
                                                <span>Mike Huston</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Phone : </label>
                                                <span>Mike Huston</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Company : </label>
                                                <span>Mike Huston</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Address : </label>
                                                <span>Mike Huston</span>
                                            </div>
                                            <button className="ad-contact">
                                                Save
                             </button>

                                        </div>
                                    </div> : ""
                            }
                            {

                                (this.state.toggleEdit) ?
                                    <div className="contact-rghttable">
                                        <div className="contact-table-card">
                                            <div className="ctable-name">
                                                <i className="ctable-icn">NC</i>
                                                <div className="ctable-namerght">
                                                    <h4>Create Edit Contact</h4>
                                                    <span>Product Manager CRM Management</span>
                                                </div>
                                            </div>

                                            <form>
                                                <div className="form-group">
                                                    <label>Full name : </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email : </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone : </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Company : </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Address : </label>
                                                    <textarea className="form-control"></textarea>
                                                </div>
                                                <button className="ad-contact">
                                                    Save
                             </button>
                                            </form>
                                        </div>
                                    </div> : ""

                            }


                        </div>
                    </section>

                </div>
            </div>
        )
    }
}


