import React from 'react';
import MedicineView from '../components/MedicineView.jsx';
import Auth from '../modules/Auth';

class CheckMedicalRequest extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = { data:[] };
  	}
	componentDidMount() {
	    const xhr = new XMLHttpRequest();
	    xhr.open('post','/api/medicalRequest');
	    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    // set the authorization HTTP header
	    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
	    xhr.responseType = 'json';

	    const email = encodeURIComponent(Auth.getUser());
	    const formData = `email=${email}`;

	    xhr.send(formData);
	    xhr.addEventListener('load', () => {
	      if (xhr.status === 200) {
	        this.setState({
	           data: xhr.response,
	        });
	      }
	    });
  	}

  render() {
		const { data } = this.state;
    return (
      <div>
          {data.length && data.map(Data => <MedicineView key={Data._id} {...Data} />)}

        </div>
    );
  }

}

export default CheckMedicalRequest;