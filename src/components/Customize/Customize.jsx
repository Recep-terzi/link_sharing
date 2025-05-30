import "./Customize.Module.css";
import { Disclosure } from "@headlessui/react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Formik } from "formik";
import ProfileDetail from "../ProfileDetail/ProfileDetail";
import { setLinkData } from "../../redux/linkSlice";
const Customize = () => {
  const [linkNumber, setLinkNumber] = useState(1);
  const [allLinks, setAllLinks] = useState([]);
  const [selectPlatform, setSelectPlatform] = useState();
  const [platformLink, setPlatformLink] = useState();
  const dispatch = useDispatch();
  const linkData = useSelector((state) => state.link.linkData);
  const addLink = () => {
    setLinkNumber(linkNumber + 1);
    setAllLinks([...allLinks, { id: linkNumber, title: `Link ${linkNumber}` }]);
  };
  const removeLink = (id) => {
    setAllLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
    dispatch(
      setLinkData(linkData.filter((data) => data.platform !== selectPlatform))
    );
  };
  const value = useSelector((state) => state.link.step);
  const handleSubmit = () => {
    if (
      linkData.find((data) => data.platformLink === platformLink) &&
      linkData.find((data) => data.platform === selectPlatform)
    ) {
      return false;
    } else {
      dispatch(
        setLinkData([
          ...linkData,
          { platform: selectPlatform, platformLink: platformLink },
        ])
      );
    }
  };
  console.log(linkData);
  return (
    <Formik
      initialValues={{
        deneme: "",
      }}
    >
      {({ values }) => {
        return (
          <div className="customize__body">
            {value === 1 && (
              <>
                <div className="customize__title">Customize your links</div>
                <div className="customize__information">
                  Add/Edit/remove links below and then share all your profiles
                  with the world!
                </div>

                <div className="add__link__button" onClick={() => addLink()}>
                  + Add new link
                </div>
                <div className=" w-full  rounded-2xl bg-white mt-8 panel__body">
                  {allLinks.map((link) => (
                    <>
                      <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between rounded-t-lg bg-[#fafafa] px-4 py-4 text-left text-sm font-bold text-[#a3a3a3] hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 rounded-none">
                              <span> {link.title} </span>
                              {open && (
                                <button
                                  onClick={() => removeLink(link.id)}
                                  className="hover:text-red-700"
                                >
                                  Remove
                                </button>
                              )}
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-gray-500 bg-[#fafafa] rounded-none flex flex-col panel">
                              <span>Platform</span>
                              <select
                                name=""
                                id=""
                                onChange={(e) =>
                                  setSelectPlatform(e.target.value)
                                }
                              >
                                <option value="Github">Github</option>
                                <option value="Linkedin">Linkedin</option>
                                <option value="Youtube">Youtube</option>
                                <option value="Instgram">Instgram</option>
                              </select>
                              <span>Link</span>
                              <Field
                                name="deneme"
                                value={platformLink}
                                onChange={(e) =>
                                  setPlatformLink(e.target.value)
                                }
                              />
                              <button
                                onClick={handleSubmit}
                                className="text-end mt-2 p-3 text-md hover:text-green-600 animate-pulse"
                              >
                                Save
                              </button>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </>
                  ))}
                </div>
              </>
            )}
            {value === 2 && <ProfileDetail />}
          </div>
        );
      }}
    </Formik>
  );
};

export default Customize;
