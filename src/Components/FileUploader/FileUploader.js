import { useState } from "react";
import './FileUploader.css';

const FileUploader = ({type,name, AddDataField}) => {
    const [selectedFile, setSelectedFile] = useState();
    const [fileUrl, setFileUrl] = useState();
    function onFileChange(event) {
        // console.log(event.target.files[0])
        if(type ==='image' && ( (event.target.files[0].name).split('.')[1] !=='png' && ((event.target.files[0].name).split('.')[1] !=='jpg') && ((event.target.files[0].name).split('.')[1] !=='jpeg')))
        {
            alert('.png or .jpeg or jpg file required');
            setSelectedFile();
            return;
        }
        if( type ==='video' && ((event.target.files[0].name).split('.')[1] !=='mp4') )
        {
            alert('.mp4 file required');
            setSelectedFile();
            return;
        }
        setSelectedFile(event.target.files[0]);
        setFileUrl(URL.createObjectURL(event.target.files[0]));
        AddDataField(name,event.target.files[0])
        // console.log(event.target.files[0]);
    };
    return (
        <div className="fileUploaderField">
            <input className="chooseFileInput" name={name} type="file" onChange={onFileChange} required/>
            {
                selectedFile
                &&
                <div>
                    <h2>File Details:</h2>
                    {
                        type ==='image'
                        ? <img width="380px" height="200px" src={fileUrl} alt="" />
                        :<video controls width="380" height="240" className="uploadedFileVideo" src={fileUrl} type="video/mp4" autoPlay></video>
                    }
                    <p>File Name: {selectedFile.name}</p>
                    <p>File Type: {selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            }
            
        </div>
        );
};

export default FileUploader;

