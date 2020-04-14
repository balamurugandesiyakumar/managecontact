import React, { Component } from 'react'
import './managecontact.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        posts: state
    }
}


class ManageContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            userDetail: {},
            toggle: true,
            toggleNew: false,
            toggleEdit: false,
            toggleAdd: false
        }
    }



    toggleViewCard(user) {
        this.setState({ toggleNew: true, toggleEdit: false, userDetail: user })
    }

    toggleEditCard = (user) => {
        this.setState({ toggleEdit: true, toggleAdd: false, toggleNew: false, userDetail: user });
    }
    toggleMenu = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    toggleAddCard = () => {
        this.setState({ toggleEdit: false, toggleNew: false, toggleAdd: true })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const email = this.getEmail.value;
        const phone = this.getPhone.value;
        const company = this.getCompany.value;
        const address = this.getAddress.value;

        const data = {
            id: this.state.users.length + 1,
            real_name: name,
            mailid: email,
            phone: phone,
            company: company,
            address: address
        }

        this.props.dispatch({
            type: 'ADD_POST',
            data
        });

        this.getName.value = '';
        this.getEmail.value = '';
        this.getPhone.value = '';
        this.getCompany.value = '';
        this.getAddress.value = '';

    }


    handleEditSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const email = this.getEmail.value;
        const phone = this.getPhone.value;
        const company = this.getCompany.value;
        const address = this.getAddress.value;

        const data = {
            real_name: name,
            mailid: email,
            phone: phone,
            company: company,
            address: address
        }

        // this.props.dispatch({ type: 'EDIT_POST', id: this.props.posts.id });
        this.props.dispatch({ type: 'UPDATE', id: this.state.userDetail.id, data: data })
        this.setState({ toggleEdit: false })

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
                                <button className="ad-contact" onClick={this.toggleAddCard}>
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
                                        {
                                            this.props.posts.map((user, i) =>
                                                <tr key={user.id}>
                                                    <td>
                                                        <div className="ctable-name" onClick={() => this.toggleViewCard(user)}>
                                                            <i className="ctable-icn">MK</i>
                                                            <div className="ctable-namerght">
                                                                <h4>{user.real_name}</h4>
                                                                <span>{user.mailid}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {user.company}
                                                    </td>
                                                    <td>
                                                        <i class="fa fa-pencil" aria-hidden="true" onClick={() => this.toggleEditCard(user)}></i>
                                                        <i class="fa fa-trash-o" aria-hidden="true" onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: user.id })}></i>
                                                    </td>
                                                </tr>
                                            )
                                        }


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
                                                    <h4>{this.state.userDetail.real_name}</h4>
                                                    <span>Product Manager CRM Management</span>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <label>Full name : </label>
                                                <span>{this.state.userDetail.real_name}</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Email : </label>
                                                <span>{this.state.userDetail.mailid}</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Phone : </label>
                                                <span>{this.state.userDetail.phone}</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Company : </label>
                                                <span>{this.state.userDetail.company}</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Address : </label>
                                                <span>{this.state.userDetail.address}</span>
                                            </div>

                                        </div>
                                    </div> : ""
                            }
                            {

                                (this.state.toggleAdd) ?
                                    <div className="contact-rghttable">
                                        <div className="contact-table-card">
                                            <div className="ctable-name">
                                                <i className="ctable-icn">NC</i>
                                                <div className="ctable-namerght">
                                                    <h4>Create Add Contact</h4>
                                                    <span>Product Manager CRM Management</span>
                                                </div>
                                            </div>

                                            <form onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label>Full name : </label>
                                                    <input type="text" className="form-control" ref={(input) => this.getName = input} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email : </label>
                                                    <input type="text" className="form-control" ref={(input) => this.getEmail = input} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone : </label>
                                                    <input type="text" className="form-control" ref={(input) => this.getPhone = input} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Company : </label>
                                                    <input type="text" className="form-control" ref={(input) => this.getCompany = input} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Address : </label>
                                                    <textarea className="form-control" ref={(input) => this.getAddress = input} required></textarea>
                                                </div>
                                                <button className="ad-contact">
                                                    Save
                             </button>
                                            </form>
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

                                            <form onSubmit={this.handleEditSubmit}>
                                                <div className="form-group">
                                                    <label>Full name : </label>
                                                    <input type="text" className="form-control" ref={(input) => this.getName = input} defaultValue={this.state.userDetail.real_name} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email : </label>
                                                    <input type="text" className="form-control" ref={(input) => this.getEmail = input} defaultValue={this.state.userDetail.mailid} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone : </label>
                                                    <input type="text" className="form-control" ref={(input) => this.getPhone = input} defaultValue={this.state.userDetail.phone} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Company : </label>
                                                    <input type="text" className="form-control" ref={(input) => this.getCompany = input} defaultValue={this.state.userDetail.company} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Address : </label>
                                                    <textarea className="form-control" ref={(input) => this.getAddress = input} defaultValue={this.state.userDetail.address} required></textarea>
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

export default connect(mapStateToProps)(ManageContact)


