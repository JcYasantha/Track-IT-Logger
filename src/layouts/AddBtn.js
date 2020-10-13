import React from 'react'

const AddBtn = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-logs-modal" className="btn-floating btn-large darken-2 waves-effect waves-light blue modal-trigger">
                <i className="material-icons">add</i>
            </a>
            <ul>
                <li>
                    <a href="#view-techs-modal" className="btn-floating waves-effect waves-light green modal-trigger">
                        <i className="material-icons">person</i>
                    </a>
                </li>
                <li>
                    <a href="#add-tech-modal" className="btn-floating waves-effect waves-light red modal-trigger">
                        <i className="material-icons">person_add</i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AddBtn
