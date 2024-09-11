import React from 'react'

function Search() {
  return (
    <div>
        {/* <!-- Modal --> */}
        <form action="" method="get" className="modal-content modal-body border-0 p-0 mt-5 mb-5 pb-5 pt-5">
                <div className="input-group mb-2 col-md-12">
                    <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                    <button type="submit" className="input-group-text bg-success text-light">
                        <i className="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
    </div>
  )
}
export default Search;