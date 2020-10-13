import React from 'react'

const AddBtn = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-logs-modal" className="btn-floating btn-large darken-2 waves-effect waves-light blue modal-trigger">
                <i class="material-icons">add</i>
            </a>
            <ul>
                <li>
                    <a href="#view-techs-modal" className="btn-floating green modal-trigger">
                        <i class="material-icons">person</i>
                    </a>
                </li>
                <li>
                    <a href="#add-tech-modal" className="btn-floating red modal-trigger">
                        <i class="material-icons">person_add</i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AddBtn
