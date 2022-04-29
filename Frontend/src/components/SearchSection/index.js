import React, { useState, Component} from 'react'
import { SearchLabel, SearchH1, SearchInput, SearchButton, SearchForm, SearchContainer, SearchContent} from './SearchElements'
import Axios from 'axios'

const SearchPage = () => {
    
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('');
    const [list, setList] = useState([]);

    const SubmitUpload = () => {
        Axios.post('http://localhost:3001/api/search', {
            search: search,
        }).then((response)=>{
            
            // setMessage(response.data)

            if (response.data.message){
                console.log(response.data)
                setMessage(response.data.message)
                setList([]);
            } else {          
                    // console.log(response.data[i].tanggal_prediksi + "-" + response.data[i].nama_pasien)
                    setMessage('')
                    setList(response.data)
                    // setMessage(response.data[i].tanggal_prediksi + "-" + response.data[i].nama_pasien)
                    // message = message + "-" + response.data[i].nama_pasien
                
            }
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };
  
    return (
        <div id= 'search'>
            <SearchContainer>
                <SearchContent>
                    <SearchH1>Search</SearchH1>
                    <SearchForm onSubmit={onSubmit}>
                        <SearchLabel>Input</SearchLabel>
                        <SearchInput 
                            type="text" 
                            required 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <SearchButton onClick={SubmitUpload}>Submit</SearchButton>
                        {/* <p>{title}</p>
                        <p>{body}</p>
                        <p>{text}</p> */}
                        <p><br/>{message}</p>
                        {list.map((val)=>{
                            return <p>{val.tanggal_prediksi} - {val.nama_pasien} - {val.penyakit_prediksi} - {val.status_prediksi}<br/></p> 
                        })}
                    </SearchForm>
                </SearchContent>
            </SearchContainer>
        </div>
    );
}

export default SearchPage