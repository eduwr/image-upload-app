import React from 'react';
import CircularProgressbar from 'react-circular-progressbar'
import { Container, FileInfo, Preview } from './styles';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src="http://localhost:3333/files/dfe6be843a1f65974dd4547001e5c613-Screenshot_from_2019-08-30_10-19-31.png-Screenshot_from_2019-08-30_10-19-31.png" />
                <div>
                    <strong>profile.png</strong>
                    <span>64kb <button onClick={()=>{}}>Excluir</button></span>
                </div>
            </FileInfo>
            <div>
                <CircularProgressbar 
                    styles={{
                        root: { width: 24 },
                        path: { stroke: '#7159c1' }
                    }}
                    strokeWidth={10}
                    percentage={60}
                />
                <a 
                    href="http://localhost:3333/files/dfe6be843a1f65974dd4547001e5c613-Screenshot_from_2019-08-30_10-19-31.png-Screenshot_from_2019-08-30_10-19-31.png" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <MdLink style={{marginRight: 8}} size={24} color={#222}/>
                </a>
            </div>
        </li>
    </Container>
)

export default FileList;

