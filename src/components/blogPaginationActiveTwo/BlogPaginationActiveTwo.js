import React from 'react';

const BlogPaginationActiveTwo = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="basic-pagination basic-pagination-2 text-center">
                        <ul>
                            <li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                            <li><a href="#">01</a></li>
                            <li className="active"><a href="#">02</a></li>
                            <li><a href="#">03</a></li>
                            <li><a href="#"><i className="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPaginationActiveTwo;