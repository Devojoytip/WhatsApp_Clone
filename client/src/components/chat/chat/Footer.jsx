import { useEffect } from 'react';

import { EmojiEmotionsOutlined, AttachFile, Mic } from '@mui/icons-material';
import { Box, styled, InputBase } from '@mui/material';

import { uploadFile } from '../../../services/api';

const Container = styled(Box)`
    height: 45px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;

const ClipIcon = styled(AttachFile)`
    transform: 'rotate(40deg)'
`;


const Footer = ({ sendText, setValue, value, file, setFile, doc, setDoc }) => {

    useEffect(() => {
        const getFile = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                console.log('Data', data)
                const response = await uploadFile(data);
                console.log('Response', response)
                setDoc(response);
            }
        }
        getFile(); 
      
    }, [file]);

    const onFileChange = (e) => {
        setValue(e.target.files[0].name);
        setFile(e.target.files[0]);
    }
    
    return (
        <Container>
            <EmojiEmotionsOutlined />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type='file'
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />

            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => sendText(e)} // ENTER key for send
                    value={value} // controlled component
                />
            </Search>
            <Mic />
        </Container>
    )
}

export default Footer;