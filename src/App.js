import React, { useState } from  'react';
import react from 'react';
//import logo from './logo.svg';
import './App.css';
import UserInput from './components/userform';
/*function CreateUser() {
  const history = useHistory();
  const [profilePicture, setProfilePicture] = useState('');
  const [profileSelected, setProfileSelected] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [date, setDate] = useState();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [inputList, setInputList] = useState([{ name: '', mobile: '' }]);
  const [imgData, setImgData] = useState(null);
  const [businessImg, setBusinessImg] = useState('');
  const { addToast } = useToasts();
  const [profileName, setProfileName] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [mobile, setMobile] = useState('');
  const [emailBusiness, setEmailBusiness] = useState('');
  const [des, setDes] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [profileNameError, setProfileNameError] = useState(false);
  const [websiteError, setWebsiteError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [desError, setDesError] = useState(false);

  const handlePhoto = (e) => {
    setProfilePicture(e.target.files[0]);
    setProfileSelected(true);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImgData(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleDatePicker = (e) => {
    setDate(e.target.value);
  };
  const handleFirstNameInputChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleCityInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    console.log(date);
    console.log(phone);
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { name: '', mobile: '' }]);
    console.log(inputList);
    setTimeout(function () {
      // console.log(data);
    }, 2000);
  };

  const uploadBusinessImages = (files) => {
    console.log(files);
    setBusinessImg(files);
  };

  const handleProfileName = (e) => {
    setProfileName(e.target.value);
  };

  const handleWebsite = (e) => {
    setWebsite(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleEmailBusiness = (e) => {
    setEmailBusiness(e.target.value);
  };

  const handleDes = (e) => {
    setDes(e.target.value);
  };

  const functionBusinessImage = async (images, businessId) => {
    try {
      const resp = await addBusinessImages(images, businessId);
      if (resp) {
        addToast('Image Uploaded Successfully', {
          appearance: 'success',
          autoDismiss: 500,
        });
      }
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateBusiness = async (businessId) => {
    const postBody = {
      profile_name: profileName,
      website: website,
      mobile: mobile,
      location: location,
      email: emailBusiness,
      description: des,
    };
    try {
      const result = await createBusiness(businessId, postBody);
      console.log(result);
      console.log(result.data.data.business.business_id);
      if (result) {
        addToast('Business Created Successfully', {
          appearance: 'success',
          autoDismiss: 500,
        });

        if (businessImg.length > 0) {
          let businessPicture = [];
          for (let j = 0; j < businessImg.length; j++) {
            businessPicture = businessImg[j].file;
            functionBusinessImage(
              result.data.data.business.business_id,
              businessPicture,
            );
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkError = (businessId) => {
    const mail = email;
    const mob = mobile;
    if (profileName === '') {
      setProfileNameError(true);
      return;
    }
    if (website === '') {
      setWebsiteError(true);
      return;
    }
    if (!validator.isEmail(mail)) {
      setEmailError(true);
      return;
    }
    if (!validator.isMobilePhone(mob)) {
      setMobileError(true);
      return;
    }
    if (location === '') {
      setLocationError(true);
      return;
    }
    if (des === '') {
      setDesError(true);
      return;
    }
    setProfileNameError(false);
    setEmailError(false);
    setMobileError(false);
    setWebsiteError(false);
    setDesError(false);
    setLocationError(false);
    handleCreateBusiness(businessId);
  };

  const functionProfilePhoto = async (id) => {
    const resp = await updateUserImage(id, profilePicture);
    if (resp) {
      addToast('Profille Image Successfully', {
        appearance: 'success',
        autoDismiss: 500,
      });
    }
    console.log(resp);
  };

  const submitProfile = async (e) => {
    e.preventDefault();
    const postBody = {
      full_name: firstName,
      date_of_birth: date,
      mobile: phone,
      email: email,
      city: city,
      family_members: inputList,
    };

    const res = await createUserAPI(postBody);
    console.log(res);

    if (res) {
      addToast('User Created Successfully', {
        appearance: 'success',
        autoDismiss: 500,
      });
      if (profileSelected === true) {
        functionProfilePhoto(res.data.data.user.user_id);
      }

      if (profileName !== '' && website !== '' && location !== '') {
        checkError(res.data.data.user.user_id);
      }
      setTimeout(() => {
        history.push('/users');
      }, 1500);
    }
  };

  return (
    <div style={{ height: '81vh', overflowY: 'scroll' }}>
      <div>
        <form className={styles.profile}>
          <div>
            {imgData ? (
              <img
                src={imgData}
                style={{ width: '25vh', height: '20vh', borderRadius: '25px' }}
              />
            ) : (
              <img src={Avatar} style={{ width: '25vh', height: '20vh' }} />
            )}
          </div>
          <div>
            <label className="custom-file-upload">
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
              />
              <i className="fa fa-cloud-upload" /> Upload
            </label>
          </div>
        </form>
      </div>

      <div className={styles.profileForm}>
        <div className={styles.profileField}>
          <div className={styles.profileInput}>
            <label>Full Name</label>
            <input
              id="first-name"
              className="form-field"
              type="text"
              placeholder="Full Name"
              name="firstName"
              value={firstName}
              onChange={(e) => handleFirstNameInputChange(e)}
            />
          </div>
          <div className={styles.profileInput}>
            <label>email</label>
            <input
              id="email"
              className="form-field"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => handleEmailInputChange(e)}
            />
          </div>
        </div>
        <div className={styles.profileField}>
          <div className={styles.profileInput}>
            <label>city</label>
            <input
              id="city"
              className="form-field"
              type="text"
              placeholder="City"
              name="city"
              value={city}
              onChange={(e) => handleCityInputChange(e)}
            />
          </div>
          <div className={styles.profileInput}>
            <label>Mobile</label>
            <PhoneInput
              country="IN"
              value={phone}
              style={{ padding: '10px', width: '35vh', radius: '25px' }}
              onChange={setPhone}
            />
          </div>
        </div>
      </div>
      {inputList.map((x, i) => {
        return (
          <div className={styles.box} key={i}>
            <label className={styles.labelOne}>Add Member</label>
            <div className={styles.boxInput}>
              <input
                name="name"
                placeholder="Enter Name"
                value={x.name}
                style={{ marginRight: '3vh' }}
                onChange={(e) => handleInputChange(e, i)}
              />
              <input
                className="ml10"
                name="mobile"
                minLength={10}
                placeholder="Enter number"
                style={{ marginRight: '2vh', padding: '8px', width: '30vh' }}
                value={x.mobile}
                onChange={(e) => handleInputChange(e, i)}
              />
              <div>
                {inputList.length !== 1 && (
                  <button
                    className="mr10"
                    style={{
                      backgroundColor: '#008CBA',
                      color: 'black',
                      border: '2px solid #008CBA',
                      border: 'none',
                      color: 'white',
                      padding: '10px 22px',
                      width: '17vh',
                      marginRight: '3vh',
                    }}
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button
                    style={{
                      backgroundColor: '#f44336',
                      color: 'black',
                      border: '2px solid #008CBA',
                      border: 'none',
                      color: 'white',
                      padding: '10px 22px',
                      width: '17vh',
                    }}
                    onClick={handleAddClick}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.box}>
        <label className={styles.labelOne}>Add Date</label>
        <input
          type="date"
          value={date}
          className={styles.datePicker}
          onChange={handleDatePicker}
        />
      </div>
      <div className={styles.businessForm}>
        <label className={styles.labelBusiness} htmlFor="Profile Name">
          Create Business
        </label>

        <div className={styles.formikForm}>
          <div className={styles.formikInput}>
            <div className={styles.formfield}>
              <TextField
                className="form-field-two"
                id="profile_name"
                label="Profile Name"
                variant="outlined"
                onChange={(e) => handleProfileName(e)}
                defaultValue={profileName}
                required
                error={profileNameError}
              />
            </div>
            <div className={styles.formfield}>
              <TextField
                className="form-field-two"
                id="Website"
                label="Website"
                variant="outlined"
                onChange={(e) => handleWebsite(e)}
                defaultValue={website}
                required
                error={websiteError}
              />
            </div>
          </div>
          <div className={styles.formikInput}>
            <div className={styles.formfield}>
              <TextField
                className="form-field-two"
                id="mobile"
                label="Mobile No"
                variant="outlined"
                onChange={(e) => handleMobile(e)}
                defaultValue={mobile}
                required
                error={mobileError}
              />
            </div>
            <div className={styles.formfield}>
              <TextField
                className="form-field-two"
                id="location"
                label="location"
                variant="outlined"
                onChange={(e) => handleLocation(e)}
                defaultValue={location}
                required
                error={locationError}
              />
            </div>
          </div>
          <div className={styles.formfield}>
            <TextField
              className="form-field-two"
              id="email"
              label="Email"
              variant="outlined"
              onChange={(e) => handleEmailBusiness(e)}
              defaultValue={emailBusiness}
              required
              error={emailError}
            />
          </div>

          <div className={styles.formfield}>
            <TextField
              className="form-field-two"
              id="description"
              label="Description"
              variant="outlined"
              onChange={(e) => handleDes(e)}
              defaultValue={des}
              required
              error={desError}
            />
          </div>
          <div></div>
          <div className={styles.formDropzone}>
            <Dropzone
              inputContent={'Add Photos'}
              inputWithFilesContent={'Add more'}
              submitButtonContent={'Save'}
              styles={{
                dropzone: {
                  width: '50vh',
                  height: '25vh',
                  overflow: 'hidden',
                  display: 'row',
                  height: 'auto',
                  borderWidth: 2,
                  borderColor: 'rgb(102, 102, 102)',
                  borderStyle: 'dotted',
                  borderRadius: 5,
                },
              }}
              onSubmit={uploadBusinessImages}
            />
          </div>
        </div>

        <button
          className={styles.submitButton}
          type="submit"
          onClick={(e) => submitProfile(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateUser;


*/

  const App = () =>{
  /*  const [username,setName] = useState({
      username: ""
    });
    



const handleinpute = (e) =>{
  const name= e.target.name;
  const value=e.target.value;        
      <input type="text" placeholder="Enter Your Name" name ="username" id = "username" onchanege="handleinpute" value="username"/>
      <button> Submit </button>
      <h1> Hello {username}</h1>
  console.log(name,value);
  
}*/
  return  (
    <div>
      <UserInput/>
    </div>
  )
  }

export default App;
