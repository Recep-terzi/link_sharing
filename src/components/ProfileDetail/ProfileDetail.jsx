import { Field, Formik } from "formik";
import "./ProfileDetail.Module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData, setImageUrl } from "../../redux/linkSlice";
import { useState } from "react";
const ProfileDetail = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    const imageInput = document.querySelector("#fileInput");
    imageInput.addEventListener("change", (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const imageDataURL = e.target.result;
          imageInput.style.backgroundImage = `url(${imageDataURL})`;
          imageInput.style.backgroundRepeat = "no-repeat";
          imageInput.style.backgroundSize = "cover";
          dispatch(setImageUrl(imageDataURL));
        };

        reader.readAsDataURL(selectedFile);
      }
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setData({ firstName: firstName, lastName: lastName, email: email })
    );
  };
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
      >
        {({ values }) => {
          return (
            <div className="profile__section">
              <div className="profile__title">Profile Details</div>
              <div className="profile__information">
                Add your details to create a personel touch your profile.
              </div>
              <div className="profile__main">
                <div className="picture">
                  <p>Profile picture</p>
                  <div>
                    <input type="file" accept="image/jpeg" id="fileInput" />
                    <p>
                      Image must be below 1024x1024px <br></br> Use PNG, JPG or
                      BMP format.
                    </p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="form">
                  <div className="first__name">
                    <p>First name*</p>
                    <Field
                      name="firstName"
                      autocomplete="off"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="last__name">
                    <p>Last name*</p>
                    <Field
                      name="lastName"
                      autocomplete="off"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="email__address">
                    <p>Email</p>
                    <Field
                      name="email"
                      autocomplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button type="submit"> Gönder </button>
                </form>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default ProfileDetail;
