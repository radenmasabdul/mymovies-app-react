import React  from "react";
import Swal from "sweetalert2";

function Alert (props) {
  // eslint-disable-next-line no-undef
  showAlert = () => {
    Swal.fire({
        title: "Success",
        text: "Alert successful",
        icon: "success",
        confirmButtonText: "OK",
      });
};

    return (
      <div className="container d-flex justify-content-center" style={{marginTop: 90}}>
               <button className="btn btn-primary btn-lg" label="Show Alert" onClick={() => alert('this.showAlert')}>
        {props.onClick}
              </button>
      </div>
    );
};

export default Alert;