import React from 'react';
import {NavLink} from 'react-router-dom';

const Productpaging = ({currentPage, pages}) => {
    let prevLink = parseInt(currentPage, 10) - 1;
    let nextLink = parseInt(currentPage, 10) + 1;
    return (
        <div className="text-center">

            <div className='btn-group text-center'>
                       {prevLink > 0 ? // Disable previous page link if showing the first page
                            <NavLink
                             to={"/Adminproductlistpage/" + prevLink}>Previous</NavLink>
                            :
                            <span>Previous</span>
                        }  
                         &nbsp;
                         &nbsp;  
                        {nextLink <= pages ? // Disable next page link if showing the last page
                            <NavLink
                             to={"/Adminproductlistpage/" + nextLink}>Next</NavLink>
                            :
                            <span>Next</span>
                        }
             </div>
        </div>
    )
};

export default Productpaging;